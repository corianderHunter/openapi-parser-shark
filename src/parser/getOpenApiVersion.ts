export enum OpenApiVersion {
  V2 = 2,
  V3 = 3,
}

export function getOpenApiVersion(openApi: any): OpenApiVersion {
  const info: any = openApi.swagger || openApi.openapi
  if (typeof info === 'string') {
    const c = info.charAt(0)
    const v = Number.parseInt(c)
    if (v === OpenApiVersion.V2 || v === OpenApiVersion.V3) {
      return v as OpenApiVersion
    }
  }
  throw new Error(`Unsupported Open API version: "${String(info)}"`)
}
