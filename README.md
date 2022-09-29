# OPENAPI-PARSESR

## installation

```shell
npm install openapi-parser-shark
```

## usage

```js
npx openapi-parser -h
```

```shell
Usage: openapi-parser [options]

openapi-parser

Options:
-c, --configFilePath <configFilePath> read configuration file to generate service file
-s, --src <src> the url(path) to get openapi-json <src>
-d, --dest <dest> the folder that parser generated the file to,default to be the current path<dest>
-n, --name <name> file name,default to be [api].ts<name>
-t, --tags <tags> file name,default to be [tags].ts<name>
-h, --help display help for command
```

## type declaration

the content of configFile follow the below data structure

```typescript
interface ConfigType {
  url: string
  outputPath?: string
  serviceImportPath?: string
  apis: {
    tags: string[]
    serviceName: string
  }[]
}
```

## demo

### use configFile

config.json

```json
{
  "url": "http://api-center.net/v2/api-docs/xx-service",
  "serviceImportPath": "./service",
  "outputPath": "output",
  "apis": [
    {
      "tags": ["aaaa", "bbbb"],
      "serviceName": "aaaBbbApi"
    }
  ]
}
```

run command

```
npx openapi-parser -c config.json
```

### use command option totally

```
 npx openapi-parser -s http://api-center.net/v2/api-docs/xx-service -n aaaBbbApi -d output -t aaaa,bbbb
```
