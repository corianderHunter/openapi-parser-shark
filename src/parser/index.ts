import { get } from 'http'
import {
  OpenApiSchema,
  SchemaObject,
  ReferenceObject,
  EnumSchemaObject,
  ArraySchemaObject,
  PrimitiveSchemaObject,
  ObjectSchemaObject,
  OperationObject,
  ParameterObject,
  RequestBodyObject,
} from '../types'
import {
  escapedChars,
  getStandProp,
  StandardPropMap,
  StandardPropMapReverse,
} from './handleNonStand'
import { intersection } from 'lodash'
import { ComponentsProp } from 'src/types'
import { getMappedType } from './getMappedType'
import camelCase from '../helper/camelCase'

export const readSpecFromHttp = (url: string): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    get(url, (response) => {
      response.setEncoding('utf-8')
      let body = ''
      response.on('data', (chunk) => {
        body += chunk
      })
      response.on('end', () => {
        try {
          resolve(JSON.parse(body))
        } catch (error) {
          reject(`无法解析swagger响应体: "${error}"`)
        }
      })
      response.on('error', () => {
        reject(`无法获取swagger响应体: "${url}"`)
      })
    })
  })
}

/**
 *
 * @param {string} ref
 * 1.#/components/schemas/Pet  关联object
 * 2.Pet.json 关联document
 * 3.definitions.json#/Pet
 * 这里只考虑 第一种情况
 */
export const linkReferenceObject = (ref: string): string[] | undefined => {
  const inferRefRegExp =
    /^#\/components\/(schemas|responses|parameters|headers|links|requestBodies)\/(.*)/
  if (!inferRefRegExp.test(ref)) {
    return
  }
  const refArr = ref.split('/')
  const componentType = refArr[2]
  const refName = ref.match(inferRefRegExp)[2]
  return [refName, componentType]
}

export const transformSpecMapToArray = (obj: Record<string, Object>) => {
  return Object.keys(obj).map((key) => ({
    uniqueKey: key,
    originKey: StandardPropMapReverse[key],
    value: obj[key],
  }))
}

const isReferenceObject = (obj: ReferenceObject | SchemaObject) => {
  return (obj as ReferenceObject)?.$ref
}

export const fixUpComponentPropName = (spec: OpenApiSchema): OpenApiSchema => {
  const { components } = spec
  if (!components) {
    return spec
  }
  Object.keys(components).forEach((key) => {
    const part = components[key]
    if (!part) {
      return
    }
    Object.keys(part).forEach((prop) => {
      const value = part[prop]
      const newProp = getStandProp(prop, key as ComponentsProp)
      delete part[prop]
      part[newProp] = value
    })
  })
  return spec
}

export const filterByTags = (
  spec: OpenApiSchema,
  tagCollection: string[]
): OpenApiSchema => {
  const { tags } = spec
  const tagNames = tags?.map(({ name }) => name)
  for (const _tag of tagCollection) {
    if (!tagNames.includes(_tag)) {
      throw new Error(`文档中没有tag-${_tag},请检查！`)
    }
  }
  const { paths } = spec
  spec.paths = Object.keys(paths).reduce((s, v) => {
    const pathItem = paths[v]
    const operations = [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ]
    let hasEffectiveOperation = false
    let resultItem = {}
    for (const operation of operations) {
      const operationObject = pathItem[operation]
      if (operationObject) {
        const { tags } = operationObject
        if (intersection(tags, tagCollection)?.length) {
          hasEffectiveOperation = true
          resultItem[operation] = operationObject
        }
      }
    }
    if (hasEffectiveOperation) {
      const otherPart = Object.keys(pathItem).reduce((s, v) => {
        if (!operations.includes(v)) {
          s[v] = pathItem[v]
        }
        return s
      }, {})
      s[v] = { ...otherPart, ...resultItem }
    }
    return s
  }, {})

  return spec
}

export const getContentObject = (
  content: Record<string, { schema: ReferenceObject | SchemaObject }>
) => {
  const keys = Object.keys(content || {})
  if (!keys?.length) return 'any'
  const defaultType = 'application/json'
  let contentType = defaultType
  if (!content[contentType]) {
    //如果没有默认类型，则取最长的type
    contentType = keys.sort((a, b) => b.length - a.length)[0]
  }
  const schema = content[contentType].schema
  return [schema, contentType]
}

export const getResponseObject = (
  responses: Record<string, { schema: ReferenceObject | SchemaObject }>
) => {
  const keys = Object.keys(responses || {})
  if (!keys?.length) return 'any'
  const defaultStatus = '200'
  let statusType = defaultStatus
  if (!responses[statusType]) {
    //如果没有默认类型，则取最长的type
    statusType = keys.sort((a, b) => b.length - a.length)[0]
  }
  const content = (responses[statusType] as any).content as Record<
    string,
    { schema: ReferenceObject | SchemaObject }
  >
  const [schema] = getContentObject(content) as [ReferenceObject]
  return transformSchema(schema)
}

export const transformSchema = (
  schema: ReferenceObject | SchemaObject | 'any'
): string => {
  try {
    if (!schema || schema === 'any') return 'any'
    if (isReferenceObject(schema)) {
      const refString = isReferenceObject(schema)
      const refArr = linkReferenceObject(refString)
      if (!refArr) return 'any'
      const [refName, componentType] = refArr
      return StandardPropMap?.[componentType]?.[refName] || 'any'
    } else {
      const s = schema as SchemaObject
      if ((s as EnumSchemaObject)?.enum) {
        return (
          (s as EnumSchemaObject).enum.map((v) => String(`'${v}'`)).join('|') ||
          ''
        )
      } else if ((s as ArraySchemaObject)?.type === 'array') {
        const { items } = s as ArraySchemaObject
        const type = transformSchema(items)
        return `${type}[]`
      } else if (
        ['boolean', 'string', 'number', 'integer'].includes(
          (s as PrimitiveSchemaObject)?.type
        )
      ) {
        return getMappedType((s as PrimitiveSchemaObject).type)
      } else if ((s as ObjectSchemaObject).type === 'object') {
        const { properties } = s as ObjectSchemaObject
        const result = Object.keys(properties).reduce((s, key) => {
          s[key] = transformSchema(properties[key])
          return s
        }, {})
        return JSON.stringify(result)
      }
      //todo 其他的schema类型
    }
    return 'any'
  } catch (error) {
    return 'any'
  }
}

/**
 * 根据http url以及method生成 唯一ID
 * @param {*} path
 * @param {*} method
 * @returns
 */
export const generateId = (path = '', method = '') => {
  const queries = path.match(/(?<=\{).*?(?=\})/g)
  let paths = path
    .replace(/{.*}/g, '')
    .split('/')
    .filter((v) => !!v)
  paths = [method, ...paths]
  if (queries && queries.length) {
    paths.push('by', queries.pop())
  }
  return camelCase(paths.join('_')).replace(escapedChars, '')
}

export const getAllParams = (operationObject: OperationObject) => {
  const { parameters = [], requestBody } = operationObject
  const params = parameters
    .filter((val) => !(val as any).$ref)
    .map((val) => {
      const {
        name,
        in: paramType,
        schema,
        required,
        description,
      } = val as ParameterObject
      if (!['query', 'path'].includes(paramType)) return
      return {
        paramType,
        name,
        description,
        required: !!required,
        type: transformSchema(schema),
      }
    })
    .filter((v) => v)
    .sort((a, b) => (b.required as any) - (a.required as any))

  let body = { type: 'any', description: '', contentType: 'any' }
  if (requestBody && !(requestBody as any).$ref) {
    const { content, description } = requestBody as RequestBodyObject
    const [schema, contentType] = getContentObject(content) as [
      SchemaObject,
      string
    ]
    const type = transformSchema(schema)
    body = { type, description, contentType }
  }
  return {
    params,
    body,
  }
}

export const isSimpleMethod = (method: string) =>
  [
    'get',
    'GET',
    'delete',
    'DELETE',
    'head',
    'HEAD',
    'options',
    'OPTIONS',
  ].includes(method)
