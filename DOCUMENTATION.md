#### load() 

load environment variables from .env file only once






##### Examples

```javascript
const { load } = require('@lykmapipo/env');
const env = load();
```


##### Returns


- `Void`



#### mapToNumber() 

convert provided value to number






##### Examples

```javascript
const { mapToNumber } = require('@lykmapipo/env');
const age = mapToNumber('3.2'); //=> 3.2
```


##### Returns


- `Void`



#### mapToString() 

convert provided value to string






##### Examples

```javascript
const { mapToString } = require('@lykmapipo/env');
const age = mapToString(3.2); //=> '3.2'
```


##### Returns


- `Void`



#### set(key[, value]) 

set environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| value | `Mixed`  | value to set on key | *Optional* |




##### Examples

```javascript
const { set } = require('@lykmapipo/env');
const BASE_PATH = set('BASE_PATH', process.cwd());
```


##### Returns


- `Mixed`  environment value



#### get(key[, defaultValue]) 

get environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Mixed`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { get } = require('@lykmapipo/env');
const BASE_PATH = get('BASE_PATH', process.cwd());
```


##### Returns


- `Mixed`  environment value



#### clear(keys) 

clear environment variables




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| keys | `String` `String`  | valid keys | &nbsp; |




##### Examples

```javascript
const { clear } = require('@lykmapipo/env');
clear('BASE_PATH');
process.env.BASE_PATH //=> undefined
```


##### Returns


- `Void`



#### getArray(key[, defaultValue]) 

get array value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Array`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getArray } = require('@lykmapipo/env');
const categories = getArray('CATEGORIES'); //=> ['Fashion', 'Technology']
```


##### Returns


- `Array`  environment value



#### getNumbers(key[, defaultValue]) 

get array of numbers from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Array.<Number>`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getNumbers } = require('@lykmapipo/env');
const ages = getNumbers('AGES'); //=> [11, 18]
```


##### Returns


- `Array.&lt;Number&gt;`  environment value



#### getNumber(key[, defaultValue]) 

get number value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Number`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getNumber } = require('@lykmapipo/env');
const defaultAge = getNumber('DEFAULT_AGE'); //=> 11
```


##### Returns


- `Number`  environment value



#### getString(key[, defaultValue]) 

get string value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `String`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getString } = require('@lykmapipo/env');
const category = getString('DEFAULT_CATEGORY'); //=> 'Fashion'
```


##### Returns


- `String`  environment value



#### getStrings(key[, defaultValue]) 

get array of strings from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Array.<String>`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getStrings } = require('@lykmapipo/env');
const categories = getStrings('CATEGORIES'); //=> ['Fashion', 'Technology']
```


##### Returns


- `Array.&lt;String&gt;`  environment value



#### getBoolean(key[, defaultValue]) 

get boolean value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `String`  | value key | &nbsp; |
| defaultValue | `Boolean`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getBoolean } = require('@lykmapipo/env');
const debug = getBoolean('DEBUG'); //=> true
```


##### Returns


- `Boolean`  environment value



#### is(env) 

check if node environment is same as given




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `String`  | value of env to test | &nbsp; |




##### Examples

```javascript
const { is } = require('@lykmapipo/env');
const test = is('TEST'); //=> true
```


##### Returns


- `Boolean`  true if its a tested node environment else false



#### isTest() 

check if node environment is test






##### Examples

```javascript
const { isTest } = require('@lykmapipo/env');
const test = isTest(); //=> true
```


##### Returns


- `Boolean`  true if its a test node environment else false



#### isDevelopment() 

check if node environment is development






##### Examples

```javascript
const { isDevelopment } = require('@lykmapipo/env');
const isDev = isDevelopment(); //=> true
```


##### Returns


- `Boolean`  true if its a development node environment else false



#### isProduction() 

check if node environment is production






##### Examples

```javascript
const { isProduction } = require('@lykmapipo/env');
const isProd = isProduction(); //=> true
```


##### Returns


- `Boolean`  true if its a production node environment else false



#### isLocal() 

check if node environment is development or test






##### Examples

```javascript
const { isLocal } = require('@lykmapipo/env');
const local = isLocal(); //=> true
```


##### Returns


- `Boolean`  true if its a development or test node environment else false



#### isHeroku() 

check if runtime environment is heroku






##### Examples

```javascript
const { isHeroku } = require('@lykmapipo/env');
const heroku = isHeroku(); //=> true
```


##### Returns


- `Boolean`  true if its runtime environment is heroku else false



#### apiVersion([optns]) 

parse api version from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| optns | `Object`  |  | *Optional* |
| optns.version&#x3D;1.0.0 | `String`  | value to use to parse api version | *Optional* |
| optns.prefix&#x3D;v | `String`  | prefix to set on parsed api version | *Optional* |
| optns.major&#x3D;true | `Boolean`  | whether to allow major part | *Optional* |
| optns.minor&#x3D;false | `Boolean`  | whether to allow minor part | *Optional* |
| optns.patch&#x3D;false | `Boolean`  | whether to allow patch part | *Optional* |




##### Examples

```javascript
const { apiVersion } = require('@lykmapipo/env');
const version = apiVersion(); //=> v1
const version = apiVersion({ version: '2.0.0' }); //=> v2
```


##### Returns


- `String`  parsed environment api version



#### getLocale() 

Obtain runtime locale






##### Examples

```javascript
const { getLocale } = require('@lykmapipo/env');
const locale = getLocale(); //=> sw
```


##### Returns


- `String`  valid runtime locale



#### getCountryCode() 

Obtain runtime country code






##### Examples

```javascript
const { getCountryCode } = require('@lykmapipo/env');
const countryCode = getCountryCode(); //=> TZ
```


##### Returns


- `String`  valid runtime country code




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
