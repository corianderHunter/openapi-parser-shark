import { isEqual, uniq } from 'lodash'
import * as parser from '@babel/parser'
import { type ParseResult } from '@babel/parser'
import {
  type VariableDeclaration,
  type ExportNamedDeclaration,
  type TSEnumDeclaration,
  type TSInterfaceDeclaration,
  type TSTypeAliasDeclaration,
} from '@babel/types'

type Result = ParseResult<import('@babel/types').File>

const parse = (code: string): Result => {
  return parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript'],
  })
}

const getTsDeclarationMap = (
  result: Result
): Record<
  string,
  TSInterfaceDeclaration | TSEnumDeclaration | TSTypeAliasDeclaration
> => {
  const nodes = result?.program?.body || []
  const types = [
    'TSEnumDeclaration',
    'TSInterfaceDeclaration',
    'TSTypeAliasDeclaration',
  ]
  return nodes
    .filter(
      (node) =>
        node.type === 'ExportNamedDeclaration' &&
        types.includes(node?.declaration?.type)
    )
    .reduce((s, _node) => {
      s[
        (
          (_node as ExportNamedDeclaration)?.declaration as
            | TSInterfaceDeclaration
            | TSEnumDeclaration
            | TSTypeAliasDeclaration
        )?.id?.name
      ] = _node
      return s
    }, {})
}

const getFunctionReferDeclarations = (result: Result) => {
  const nodes = result?.program?.body as ExportNamedDeclaration[]
  const functionDeclaration = nodes
    .filter((node) => node?.declaration?.type === 'VariableDeclaration')
    .map(
      (node) => (node?.declaration as VariableDeclaration)?.declarations?.[0]
    )
  return functionDeclaration
}

//找出程序片段中的类型引用
const getReferDeclarationName = (declaration, nameStorage: string[]) => {
  if (!declaration || !Object.keys(declaration)?.length) return
  const objectProp = [
    'returnType',
    'params',
    'typeAnnotation',
    'typeParameters',
    'init',
    'body',
    'declaration',
    'elementType',
  ]
  const targetType = 'TSTypeReference'
  if (declaration['type'] === targetType) {
    if (declaration['name']) {
      nameStorage.push(declaration['name'])
    }
    if (declaration?.typeName?.name) {
      nameStorage.push(declaration?.typeName?.name)
    }
  }
  objectProp.forEach((key) => {
    if (declaration[key]) {
      if (Array.isArray(declaration[key])) {
        declaration[key].forEach((item) =>
          getReferDeclarationName(item, nameStorage)
        )
      } else {
        getReferDeclarationName(declaration[key], nameStorage)
      }
    }
  })
}

//从类型引用中，递归找出所有引用类型
const getAllUsedDeclarationNames = (
  markedDeclarationNames: string[],
  tsDeclarationMap: Record<
    string,
    TSEnumDeclaration | TSInterfaceDeclaration | TSTypeAliasDeclaration
  >,
  allUsedDeclarations: string[]
) => {
  if (!markedDeclarationNames?.length) return
  let currentDeclarations = [...markedDeclarationNames]
  let currentResult = []
  do {
    currentDeclarations.forEach((name) => {
      if (tsDeclarationMap[name]) {
        getReferDeclarationName(tsDeclarationMap[name], currentResult)
      }
    })
    currentDeclarations = []
    currentResult.forEach((v) => {
      if (!allUsedDeclarations.includes(v)) {
        allUsedDeclarations.push(v)
        currentDeclarations.push(v)
      }
    })
    currentResult = []
  } while (currentDeclarations?.length)
  return allUsedDeclarations
}

const removeUnUsedPart = (code: string, blankOffsets: number[]) => {
  let newCode = ''
  let startIndex = blankOffsets.shift() || 0
  let used = true
  for (let i = 0; i < code.length; i++) {
    if (startIndex === i) {
      used = !used
      startIndex = blankOffsets.shift() || 0
    }
    if (used) {
      newCode += code.charAt(i)
    }
  }
  return newCode
}

const optimizeDeclarations = (code: string) => {
  const markedDeclarations: string[] = []
  const allUsedDeclarations: string[] = []

  const result = parse(code)

  const tsDeclarationMap = getTsDeclarationMap(result)

  const functionReferDeclarations = getFunctionReferDeclarations(result)

  functionReferDeclarations.forEach((item) => {
    getReferDeclarationName(item.init, markedDeclarations)
  })

  allUsedDeclarations.push(...markedDeclarations)

  getAllUsedDeclarationNames(
    markedDeclarations,
    tsDeclarationMap,
    allUsedDeclarations
  )

  const uniqDeclarations = uniq(allUsedDeclarations)

  const unUsedDeclarations = Object.keys(tsDeclarationMap)
    .filter((key) => !uniqDeclarations.includes(key))
    .map((v) => tsDeclarationMap[v])

  const blankOffsets: number[] = unUsedDeclarations
    .reduce((s, v) => {
      const { leadingComments, start, end } = v
      leadingComments.forEach(({ start = 0, end = 0 }) => {
        s.push([start, end])
      })
      s.push([start, end])
      return s
    }, [])
    .sort((a, b) => a[0] - b[0])
    .reduce((s, v) => {
      s.push(...v)
      return s
    }, [])

  return removeUnUsedPart(code, blankOffsets)
}

export default optimizeDeclarations
