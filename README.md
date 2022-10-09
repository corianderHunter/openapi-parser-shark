# OPENAPI-PARSESR

## introduction

generate service code according to OpenAPI document,support openapi 2.0 and openapi 3.0

### Emmmmm

- typescript.auto generate data model from openapi schema.
- flexibility.organize your code by specifying tag.

### what's tag

![image](https://i.imgur.com/QzoWf7U.jpeg)
![image](https://i.imgur.com/V6Dv0mR.jpg)
![image](https://i.imgur.com/RnkJCMI.jpg)

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
-s, --src <src> the url(path) to get openapi-json,from local disk、https or http resource <src>
-d, --dest <dest> the folder that parser generated the file to,default to be the current path<dest>
-n, --name <name> file name,default to be [api].ts<name>
-t, --tags <tags> specify tags,default to be empty and create full service code<name>
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
