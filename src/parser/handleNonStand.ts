import { uniq, upperFirst } from 'lodash'
import { ComponentsProp, ComponentsPropSuffix } from 'src/types'
import camelCase from '../helper/camelCase'
import * as hash from 'object-hash'

export const escapedChars = /\.|\{|\}|\@|\&|\*|\#|\?|\=|\«|\»|\,/g

export const StandardPropMap = {
  schemas: {},
  responses: {},
  parameters: {},
  headers: {},
  links: {},
  requestBodies: {},
}
export const StandardPropMapReverse = {
  schemas: {},
  responses: {},
  parameters: {},
  headers: {},
  links: {},
  requestBodies: {},
}
const ComponentsPropSuffixMap: ComponentsPropSuffix = {
  schemas: 'model',
  responses: 'response',
  parameters: 'parameter',
  headers: 'header',
  links: 'link',
  requestBodies: 'requestBody',
}

export const isStandardProp = (prop: string): boolean =>
  /^([a-zA-Z_$])([a-zA-Z0-9_$])*$/.test(prop)

const generateStandardProp = (() => {
  return (letter: string, type: ComponentsProp = 'schemas') => {
    const tryStandardProp = uniq(
      letter
        .replace(escapedChars, '_')
        .split('_')
        .filter((v) => v)
        .map((v) => upperFirst(v))
    ).join('')
    if (isStandardProp(tryStandardProp)) {
      StandardPropMap[type][letter] = tryStandardProp
      StandardPropMapReverse[type][tryStandardProp] = letter

      return tryStandardProp
    }
    let suffixPrefix = ComponentsPropSuffixMap[type] || type || 'WeirdModel'
    suffixPrefix = camelCase(suffixPrefix, {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    })
    const hashName = hash(letter).slice(0, 8)
    return `Standard${suffixPrefix}$${hashName}`
  }
})()

export const handleNonstandardProp = (letter: string, type) => {
  if (StandardPropMap?.[type]?.[letter]) {
    return StandardPropMap[type][letter]
  }
  const prop = generateStandardProp(letter, type)
  if (!StandardPropMap[type]) {
    StandardPropMap[type] = {}
    StandardPropMapReverse[type] = {}
  }
  StandardPropMap[type][letter] = prop
  StandardPropMapReverse[type][prop] = letter

  return prop
}

export const getOriginalProp = (prop: string) => {
  return StandardPropMapReverse[prop] || prop
}

export const getStandProp = (
  prop: string,
  type: ComponentsProp = 'schemas'
): string => {
  if (!prop) return 'any'
  if (isStandardProp(prop)) {
    StandardPropMap[type][prop] = prop
    return prop
  }
  return handleNonstandardProp(prop, type)
}
