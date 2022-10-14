import { readFileSync, writeFile, writeFileSync } from 'fs'
import Handlebars = require('handlebars')
import { join, resolve } from 'path'
import * as prettier from 'prettier'
import { RenderApiOption } from 'src/types'
import optimizeDeclarations from '../parser/optimizeDeclarations'
import './partials'
import { registerServiceImportHelper, setFileSource } from './partials'

const defaultOutDir = join(resolve())

const prettierOption: prettier.Options = {
  parser: 'typescript',
  proseWrap: 'always',
  printWidth: 80,
  semi: false,
  singleQuote: true,
}

export const renderApi = (
  view,
  {
    optimize = false,
    outputPath = defaultOutDir,
    name = 'api',
    serviceImportPath = './service',
    fileSource = '',
  }: RenderApiOption = {}
) => {
  setFileSource(fileSource)
  const template = readFileSync(join(__dirname, './api.handlebars'), 'utf8')
  registerServiceImportHelper(serviceImportPath)
  let content = Handlebars.compile(template)(view)
  if (optimize) {
    content = optimizeDeclarations(content)
  }
  const formattedContent = prettier.format(content, prettierOption)
  writeFileSync(join(outputPath, `${name}.ts`), formattedContent)
}
