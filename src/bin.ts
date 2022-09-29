#!/usr/bin/env node

import { readSpec, readSpecFromDisk } from './helper/readSpec'
import convertSpec from './parser/transformSpec2T3'
import { renderApi } from './template'

import { Command } from 'commander'
import { filterByTags } from './parser'
import { ConfigType } from './types'
import { cloneDeep } from 'lodash'
const program = new Command()

program.description('openapi-parser')

program
  .option(
    '-c, --configFilePath <configFilePath>',
    'read configuration file to generate service file '
  )
  .option('-s, --src <src>', 'the url(path) to get openapi-json <src>')
  .option(
    '-d, --dest <dest>',
    'the folder that parser generated the file to,default to be the current path<dest>'
  )
  .option('-n, --name <name>', 'file name,default to be [api].ts<name>')
  .option('-t, --tags <tags>', 'file name,default to be [tags].ts<name>')

program.parse()

const options = program.opts()

const { src, dest, name, tags, configFilePath } = options

if (!configFilePath && !src) {
  console.error(`must set -c or -s.`)
  process.exit(0)
}

;(async () => {
  try {
    if (configFilePath) {
      const configString = await readSpecFromDisk(configFilePath)
      const config = JSON.parse(configString) as ConfigType
      const { url, outputPath, serviceImportPath, apis } = config
      const json = await readSpec(url)
      let openApi = await convertSpec(json)
      for (const apiItem of apis) {
        let currentApi = cloneDeep(openApi)
        const { tags, serviceName } = apiItem
        if (tags?.length) {
          const tagCollection = tags?.filter((v) => v).map((v) => v.trim())
          currentApi = filterByTags(currentApi, tagCollection)
        }
        renderApi(currentApi ?? {}, {
          optimize: !!tags?.length,
          outputPath,
          serviceImportPath,
          name: serviceName,
        })
      }
    } else {
      const json = await readSpec(src)
      let openApi = await convertSpec(json)
      if (tags) {
        const tagCollection = tags
          ?.split(',')
          ?.filter((v) => v)
          .map((v) => v.trim())
        openApi = filterByTags(openApi, tagCollection)
      }
      renderApi(openApi ?? {}, {
        optimize: !!tags,
        outputPath: dest,
        name: name,
      })
    }
  } catch (error) {
    console.error(`openapi-parser error:${error}`)
  }
})()
