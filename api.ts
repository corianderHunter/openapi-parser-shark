// tslint:disable

import { AxiosInstance } from 'axios'
import fetch from './service'

/**
 *
 * @summary dataSetList
 * @interface dataSetList
 */
export interface dataSetList {
  /**
   *
   * @type { number }
   * @memberof dataSetList
   */
  ['total']?: number
  /**
   *
   * @type { {"apiKey":"string","apiVersionNumber":"string","apiUrl":"string","apiDocumentationUrl":"string"}[] }
   * @memberof dataSetList
   */
  ['apis']?: {
    apiKey: 'string'
    apiVersionNumber: 'string'
    apiUrl: 'string'
    apiDocumentationUrl: 'string'
  }[]
}

/**
 * @tags metadata
 * @summary List available data sets
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const get = async (local_options?: AxiosInstance): Promise<any> => {
  let local_url = '/'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags metadata
 * @summary Provides the general information about the API and the list of fields that can be used to query the dataset.
 * @param {string} dataset Name of the dataset.
 * @param {string} version Version of the dataset.
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getFieldsByVersion = async (
  dataset: string,
  version: string,
  local_options?: AxiosInstance
): Promise<string> => {
  let local_url = '/{dataset}/{version}/fields'
  local_url = local_url
    .replace('{dataset}', encodeURIComponent(String(dataset)))
    .replace('{version}', encodeURIComponent(String(version)))

  let local_params = { dataset, version }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<string>
}

/**
 * @tags search
 * @summary Provides search capability for the data set with the given search criteria.
 * @param {string} version Version of the dataset.
 * @param {string} dataset Name of the dataset. In this case, the default value is oa_citations
 * @param {{"criteria":"string","start":"number","rows":"number"}} [body] undefined
 * @param {AxiosInstance} local_options
 */
export const postRecordsByVersion = async (
  version: string,
  dataset: string,
  body?: { criteria: 'string'; start: 'number'; rows: 'number' },
  local_options?: AxiosInstance
): Promise<any[]> => {
  let local_url = '/{dataset}/{version}/records'
  local_url = local_url
    .replace('{version}', encodeURIComponent(String(version)))
    .replace('{dataset}', encodeURIComponent(String(dataset)))

  let local_params = { version, dataset }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any[]>
}
