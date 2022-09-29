import Handlebars = require('handlebars')
import { getOriginalProp, getStandProp } from '../parser/handleNonStand'
import { getMappedType } from '../parser/getMappedType'
import {
  generateId,
  getAllParams,
  getContentObject,
  getResponseObject,
  isSimpleMethod,
  linkReferenceObject,
  transformSchema,
} from '../parser/index'
import { ComponentsProp, ReferenceObject, SchemaObject } from '../types'
import camelCase from '../helper/camelCase'

//是SchemaObject还是ReferenceObject
Handlebars.registerHelper('isRef', (content) => {
  const [obj] = getContentObject(content)
  if (obj === 'any') return false
  return !!obj['$ref']
})

Handlebars.registerHelper('isEqual', (a, b) => {
  return a === b
})

Handlebars.registerHelper('isTypeNameEqual', (a, content) => {
  const [obj] = getContentObject(content) as [ReferenceObject]
  const refString = obj.$ref
  const [refName, componentType] = linkReferenceObject(refString)
  const name = getStandProp(refName, componentType as ComponentsProp)
  return a === name
})

Handlebars.registerHelper('camelCase', (value: string) => {
  return camelCase(value)
})

//判断是不是 method prop
Handlebars.registerHelper('isMethod', (value: string) => {
  return [
    'get',
    'GET',
    'delete',
    'DELETE',
    'head',
    'HEAD',
    'options',
    'OPTIONS',
    'post',
    'POST',
    'put',
    'PUT',
    'patch',
    'PATCH',
    'purge',
    'PURGE',
    'link',
    'LINK',
    'unlink',
    'UNLINK',
  ].includes(value)
})

Handlebars.registerHelper('isSimpleMethod', (method: string) => {
  return isSimpleMethod(method)
})

//类型映射
Handlebars.registerPartial('getMappedType', getMappedType)

//异常key缓存
Handlebars.registerPartial('getOriginalProp', getOriginalProp)

//requird 是否
Handlebars.registerPartial('isRequired', ({ source = [], target }) => {
  return source?.includes(target) ? '' : '?'
})

//transformSchema
Handlebars.registerPartial('transformSchema', (value) => {
  return transformSchema(value)
})

//link content $ref
Handlebars.registerPartial('linkRef', (content) => {
  const [obj] = getContentObject(content) as [ReferenceObject]
  const refString = obj.$ref
  const [refName, componentType] = linkReferenceObject(refString)
  return getStandProp(refName, componentType as ComponentsProp)
})

//获取response Type
Handlebars.registerPartial('responseType', (responses) => {
  return getResponseObject(responses)
})

//生成方法名
Handlebars.registerPartial('generateMethodName', ({ path, method }) => {
  return generateId(path, method)
})

//获取方法参数名
Handlebars.registerPartial('getAllParamsComment', (operationObject) => {
  const result = getAllParams(operationObject)
  const { params, body } = result
  const paramsArr = params.map(
    ({ name, type, description }) =>
      `* @param {${type}} ${name} ${description}\n`
  )
  if (body.type) {
    paramsArr.push(`* @param {${body.type}} [body] ${body.description}\n`)
  }
  return paramsArr.join('')
})

//获取参数 注释
Handlebars.registerPartial('getAllParams', ({ operationObject, method }) => {
  const result = getAllParams(operationObject)
  const { params, body } = result
  let bodyParamString = ''
  if (
    body.type &&
    ![
      'get',
      'GET',
      'delete',
      'DELETE',
      'head',
      'HEAD',
      'options',
      'OPTIONS',
    ].includes(method)
  ) {
    bodyParamString = `body?:${body.type},`
  }
  const paramsArr = params.map(
    ({ name, required, type }) =>
      `${name}${required ? '' : '?'}:${type || 'any'},`
  )
  return paramsArr.join('').concat(bodyParamString)
})

//构造 axios params data 函数行
Handlebars.registerPartial(
  'getParamsPartial',
  ({ path, operationObject, method }) => {
    const result = getAllParams(operationObject)
    const { params: paramsValue } = result
    const paramsPartialString = paramsValue.reduce((s, v) => {
      s = s + `${v.name},`
      return s
    }, '')
    const urlPartialArray = paramsValue
      .filter(({ paramType }) => paramType === 'path')
      .map(
        ({ name }) =>
          `.replace('{${name}}', encodeURIComponent(String(${name})))\n`
      )
    let urlPartialString = ''
    if (urlPartialArray.length) {
      urlPartialString += 'local_url = local_url'
      urlPartialString += urlPartialArray.join('')
    }
    return `${urlPartialString}
  let local_params = {${paramsPartialString}}\n`.concat(
      isSimpleMethod(method) ? '' : `let local_body = body || {}\n;`
    )
  }
)

export const registerServiceImportHelper = (path) => {
  Handlebars.registerPartial('servicePath', () => {
    return path
  })
}
