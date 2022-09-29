import convertSpec from '../src/parser/transformSpec2T3'
import {
  filterByTags,
  readSpecFromHttp,
  transformSpecMapToArray,
} from '../src/parser/index'
import { readSpec } from '../src/helper/readSpec'
import { renderApi } from '../src/template'
import { readFileSync } from 'fs'
import { join } from 'path'
;(async () => {
  // const json = await readSpecFromHttp(
  //   'http://carbon-inspect.test.fnwintranet.com/v2/api-docs'
  // )

  // const json = await readSpec(
  //   'https://api.apis.guru/v2/specs/abstractapi.com/geolocation/1.0.0/openapi.json'
  // )
  // const json = JSON.parse(readFileSync(join(__dirname, './test.json'), 'utf8'))
  // const json = await readSpecFromHttp('http://10.19.182.140:8080/v2/api-docs')

  // )
  const json = JSON.parse(readFileSync(join(__dirname, './1.v3.json'), 'utf8'))
  // const json = JSON.parse(
  //   readFileSync(join(__dirname, './swagger.json'), 'utf8')
  // )
  // const json = JSON.parse(
  //   readFileSync(join(__dirname, './blueJay-app.json'), 'utf8')
  // )
  let openapi = await convertSpec(json)
  // openapi = filterByTags(openapi, ['SOS泛能态大数据API'])
  // openapi = filterByTags(openapi, '医师客户管理接口')
  // openapi.components.requestBodies['AuditDTO'] = {
  //   ...openapi.components.schemas['AuditDTO'],
  // }
  // openapi.components.requestBodies['testtest111'] = {
  //   ...openapi.components.schemas['TestEnum'],
  // }

  renderApi(openapi ?? {}, {
    // optimize: true,
  })
})()
