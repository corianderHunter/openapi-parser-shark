export interface ConfigType {
  url: string
  outputPath?: string
  serviceImportPath?: string
  apis: {
    tags: string[]
    serviceName: string
  }[]
}

export interface RenderApiOption {
  optimize?: boolean
  name?: string
  outputPath?: string
  serviceImportPath?: string
  fileSource?: string
}

export interface ContactObject {
  name?: string
  url?: string
  email?: string
}

export interface LicenseObject {
  name: string
  url?: string
}

export interface InfoObject {
  title: string
  description?: string
  termsOfService?: string
  contact?: ContactObject
  license?: LicenseObject
  version: string
}

export interface ServerVariableObject {
  enum?: string[]
  default: string
  description?: string
}

export interface ServerObject {
  url: string
  description?: string
  variables?: { [key: string]: ServerVariableObject }
}

export interface BaseSchemaObject {
  format?: string
  deprecated?: boolean
  nullable?: boolean
  description?: string
  // maxItems?: number;
  // minItems?: number;
}

export interface AnySchemaObject extends BaseSchemaObject {
  type: 'any'
}

export interface PrimitiveSchemaObject extends BaseSchemaObject {
  format?: string
  type?: 'boolean' | 'string' | 'number' | 'integer'
}

export interface EnumSchemaObject extends BaseSchemaObject {
  enum?: (string | number | boolean | null)[]
}

export interface ObjectSchemaObject extends BaseSchemaObject {
  type?: 'object'
  properties?: { [key: string]: SchemaObject | ReferenceObject }
  additionalProperties?: boolean | SchemaObject | ReferenceObject
  required?: string[]
}

export interface ArraySchemaObject extends BaseSchemaObject {
  type?: 'array'
  items?: SchemaObject | ReferenceObject
}

export interface OfSchemaObject extends BaseSchemaObject {
  allOf?: SchemaObject | ReferenceObject
  oneOf?: SchemaObject | ReferenceObject
  anyOf?: SchemaObject | ReferenceObject
}

export interface ExpandSchemaObject {
  isEnum?: boolean
}

export type SchemaObject =
  | PrimitiveSchemaObject
  | EnumSchemaObject
  | ObjectSchemaObject
  | ArraySchemaObject
  | OfSchemaObject
  | AnySchemaObject

export interface ReferenceObject {
  $ref: string
}

export interface PathObject {
  [path: string]: PathItemObject
}

export interface RequestBodyObject {
  description?: string
  content?: {
    [contentType: string]: { schema: ReferenceObject | SchemaObject }
  }
}

export interface ParameterObject {
  name: string
  in: 'query' | 'header' | 'path' | 'cookie'
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  explode?: boolean
  style:
    | 'matrix'
    | 'label'
    | 'form'
    | 'simple'
    | 'spaceDelimited'
    | 'pipeDelimited'
    | 'deepObject'
  schema?: ReferenceObject | SchemaObject //  A parameter MUST contain either a schema property, or a content property
  content?: {
    [contentType: string]: { schema: ReferenceObject | SchemaObject }
  } // A parameter MUST contain either a schema property, or a content property
}

export interface HeaderObject extends ParameterObject {
  in: 'header'
}

export interface LinkObject {
  operationRef?: string
  operationId?: string
  parameters?: (ReferenceObject | ParameterObject)[]
  requestBody?: RequestBodyObject
  description?: string
}

export interface ResponseObject {
  description?: string
  headers?: Record<string, ReferenceObject | HeaderObject>
  schema?: ReferenceObject | SchemaObject
  links?: Record<string, ReferenceObject | LinkObject>
  content?: {
    [contentType: string]: { schema: ReferenceObject | SchemaObject }
  }
}

export interface OperationObject {
  description?: string
  tags?: string[] // unused
  summary?: string // unused
  operationId?: string
  parameters?: (ReferenceObject | ParameterObject)[]
  requestBody?: ReferenceObject | RequestBodyObject
  responses?: Record<string, ResponseObject>
  servers?: ServerObject[]
}

export interface PathItemObject {
  $ref?: string
  summary?: string
  description?: string
  get?: OperationObject
  put?: OperationObject
  post?: OperationObject
  delete?: OperationObject
  options?: OperationObject
  head?: OperationObject
  patch?: OperationObject
  trace?: OperationObject
  parameters?: (ReferenceObject | ParameterObject)[]
  servers?: ServerObject[]
}

export interface TagObject {
  name: string
  description?: string
}

export type ComponentsProp =
  | 'schemas'
  | 'responses'
  | 'parameters'
  | 'headers'
  | 'links'
  | 'requestBodies'

export type ComponentsPropSuffix = {
  [p in ComponentsProp]: string
}

export interface OpenApiSchema {
  openapi: string //当前openapi标准版本
  info: InfoObject
  servers: ServerVariableObject
  components?: {
    schemas: Record<string, SchemaObject | ReferenceObject>
    responses: Record<string, ResponseObject | ReferenceObject>
    parameters: Record<string, ParameterObject | ReferenceObject>
    headers: Record<string, HeaderObject | ReferenceObject>
    links: Record<string, LinkObject | ReferenceObject>
    requestBodies: Record<string, RequestBodyObject | ReferenceObject>
  }
  paths: PathObject
  tags: TagObject[]
}
