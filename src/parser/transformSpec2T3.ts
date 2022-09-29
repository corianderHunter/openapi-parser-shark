// import { fixUpComponentPropName } from '../helper/'

import { OpenApiSchema } from 'src/types'
import { fixUpComponentPropName } from '.'
import { getOpenApiVersion, OpenApiVersion } from './getOpenApiVersion'
const converter = require('../helper/converter')

let options = {} as any
options.patch = true
options.warnOnly = true
const convertSpec = (spec, tags = ''): Promise<OpenApiSchema> => {
  return new Promise((resolve, reject) => {
    const openApiVersion = getOpenApiVersion(spec)
    if (openApiVersion === OpenApiVersion.V3) {
      try {
        resolve(spec)
      } catch (error) {
        reject(error)
        console.log(error)
      }
      return
    }
    converter.convertObj(spec, options, function (err, options) {
      if (err) {
        reject(err)
        console.log(err)
        return
      }
      const { openapi } = options
      const fixedOpenApi = fixUpComponentPropName(openapi)
      resolve(fixedOpenApi)
    })
  })
}

export default convertSpec
