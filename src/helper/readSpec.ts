import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { get as gets } from 'https'
import { get } from 'http'

export async function readSpecFromDisk(input: string): Promise<string> {
  const filePath = resolve(process.cwd(), input)
  const fileExists = existsSync(filePath)
  if (fileExists) {
    try {
      const content = readFileSync(filePath, 'utf8')
      return content.toString()
    } catch (e) {
      throw new Error(`Could not read OpenApi spec: "${filePath}"`)
    }
  }
  throw new Error(`Could not find OpenApi spec: "${filePath}"`)
}

export async function readSpecFromHttps(url: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    gets(url, (response) => {
      let body = ''
      response.on('data', (chunk) => {
        body += chunk
      })
      response.on('end', () => {
        resolve(body)
      })
      response.on('error', () => {
        reject(`Could not read OpenApi spec: "${url}"`)
      })
    })
  })
}

export async function readSpecFromHttp(url: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    get(url, (response) => {
      let body = ''
      response.on('data', (chunk) => {
        body += chunk
      })
      response.on('end', () => {
        resolve(body)
      })
      response.on('error', () => {
        reject(`Could not read OpenApi spec: "${url}"`)
      })
    })
  })
}

export async function readSpec(input: string): Promise<Record<any, any>> {
  let resultJson = ''
  if (input.startsWith('https://')) {
    resultJson = await readSpecFromHttps(input)
  } else if (input.startsWith('http://')) {
    resultJson = await readSpecFromHttp(input)
  } else {
    resultJson = await readSpecFromDisk(input)
  }
  try {
    return JSON.parse(resultJson)
  } catch (error) {
    return {}
  }
}
