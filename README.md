## boilerplate - manage the call_queues and waiting calls which are inside the available queue.

## Dependency 
1. Dependency installation - guide
```
   npm install
   OR
   npm i
```
2. Dependency installation for dev - guide
```
   npm install
   OR
   npm install -dev
```
   
3. Library for Validation
```
   express-validator : "^6.2.0"
```

## Requirement

- Nodejs - 18.x
- Npm - 7.x
- Nvm - 0.x
- Db - Mysql - 2.x
- Cache - Redis -3.x
- Messaging - RabbitMq - 0.10.3

## Postman collection
Please import this public link
```
https://api.postman.com/collections/2304004-687a915a-6a39-4c50-a159-a5590fa807ea?access_key=PMAT-01GVT77YS6JHBXTF79R9QZPFEA
```

## Postman environment for local system
```
{
	"id": "604a7986-4f1f-4dd9-9b9f-ajjsfjajj",
	"name": "boilerplate",
	"values": [
		{
			"key": "url",
			"value": "http://localhost:3001",
			"type": "default",
			"enabled": true
		},
		{
			"key": "api_key",
			"value": "dummy",
			"type": "default",
			"enabled": true
		}
	],
	"_postman_variable_scope": "environment",
	"_postman_exported_at": "2023-01-10T05:21:35.936Z",
	"_postman_exported_using": "Postman/9.8.3"
}
```

## Env varible for local system
Add env file in root folder and copy these values
```
# app general configs
APP_NAME=boilerplate services
APP_PORT=3001
API_KEY=take_origal_value
```

## How to start
```
npm start
```

## TODO

- [ ] Validation on request
- [ ] Request Validation 
- [ ] Unit testing
- [ ] Code Coverage
- [ ] Test Report
- [ ] Readme update
- [ ] Postman collection update
- [ ] LoadTest
- [ ] Code Review
- [ ] Function/Type Comments
- [ ] Add JsDoc Comments
- [ ] Update swagger doc and Regenrate the json file

## Unit test
```
~/boilerplate/unit-test/test-cases/**
```

## Mock files
```
Install:
~/boilerplate/unit-test/test-data/**
```

## How to run testcases
```
Single file
   npm run unit-test-single {file path}
Complete test cases
   npm run unit-test

```

## How to check Coverage
```
Single file
   npm run coverage-single {file path}
Complete test cases
   npm run coverage
```

## How to check Report
```
Complete report
   npm run npm run unit-test-report
```

## Code Coverage folder
```
~/boilerplate/coverage/lcov-report/index.html
```

## Code Report folder

```
~/boilerplate/Report/test_cases_report.html
```

## How to generate swagger doc
```
npm run swagger-autogen
```
## Swagger API documentation
```
{{url}}/api-docs/
```

## Log Type
```
ERROR : A burning issue/ system failures / program failures / unexpected exceptions, must be taken a look immediately by the engineers.

WARN : A possible issue / limited scope / known exceptions : can be monitored and taken action based on intensity

INFO : Optimized General log useful for checking the detailed workflow

DEBUG : Exclusively enabled for debugging purposes only, disabled in prod, can be optionally enabled on stage.

TRACE : Limited to Dev, Detailed and tracing every function invocation, debugging purpose only, disabled in prod.
```