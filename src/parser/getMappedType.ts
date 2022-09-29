export const TYPE_MAPPINGS = new Map<string, string>([
  ['File', 'File'],
  ['file', 'File'],
  ['any', 'any'],
  ['object', 'any'],
  ['array', 'any[]'],
  ['boolean', 'boolean'],
  ['byte', 'number'],
  ['int', 'number'],
  ['integer', 'number'],
  ['float', 'number'],
  ['double', 'number'],
  ['short', 'number'],
  ['long', 'number'],
  ['number', 'number'],
  ['char', 'string'],
  ['date', 'string'],
  ['date-time', 'string'],
  ['password', 'string'],
  ['string', 'string'],
  ['void', 'void'],
  ['null', 'null'],
])

export function getMappedType(type: string): string {
  return TYPE_MAPPINGS.get(type) || 'any'
}

export function hasMappedType(type: string): boolean {
  return TYPE_MAPPINGS.has(type)
}
