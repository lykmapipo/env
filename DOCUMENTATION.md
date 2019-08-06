#### load() 

Load environment variables from .env file only once






##### Examples

```javascript
const { load } = require('@lykmapipo/env');
const env = load();
```


##### Returns


- `Void`



#### mapToNumber(value) 

Convert provided value to number




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value |  | valid value | &nbsp; |




##### Examples

```javascript
const { mapToNumber } = require('@lykmapipo/env');
const age = mapToNumber('3.2'); //=> 3.2
```


##### Returns


- `number`  value as number



#### mapToString(value) 

Convert provided value to string




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value |  | valid value | &nbsp; |




##### Examples

```javascript
const { mapToString } = require('@lykmapipo/env');
const age = mapToString(3.2); //=> '3.2'
```


##### Returns


- `string`  value as string



#### set(key[, value]) 

Set environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| value |  | value to set on key | *Optional* |




##### Examples

```javascript
const { set } = require('@lykmapipo/env');
const BASE_PATH = set('BASE_PATH', process.cwd());
```


##### Returns


-  environment value



#### get(key[, defaultValue]) 

Get environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue |  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { get } = require('@lykmapipo/env');
const BASE_PATH = get('BASE_PATH', process.cwd());
```


##### Returns


-  environment value



#### clear(keys) 

Clear environment variables




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| keys | `string`  | valid keys | &nbsp; |




##### Examples

```javascript
const { clear } = require('@lykmapipo/env');
clear('BASE_PATH');
process.env.BASE_PATH //=> undefined
```


##### Returns


- `Void`



#### getArray(key[, defaultValue]) 

Get array value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `Array`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getArray } = require('@lykmapipo/env');
const categories = getArray('CATEGORIES'); //=> ['Fashion', 'Technology']
```


##### Returns


- `Array`  environment value



#### getNumbers(key[, defaultValue]) 

Get array of numbers from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `Array.<number>`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getNumbers } = require('@lykmapipo/env');
const ages = getNumbers('AGES'); //=> [11, 18]
```


##### Returns


- `Array.&lt;number&gt;`  environment value



#### getNumber(key[, defaultValue]) 

Get number value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `number`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getNumber } = require('@lykmapipo/env');
const defaultAge = getNumber('DEFAULT_AGE'); //=> 11
```


##### Returns


- `number`  environment value



#### getString(key[, defaultValue]) 

Get string value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `string`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getString } = require('@lykmapipo/env');
const category = getString('DEFAULT_CATEGORY'); //=> 'Fashion'
```


##### Returns


- `string`  environment value



#### getStrings(key[, defaultValue]) 

Get array of strings from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `Array.<string>`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getStrings } = require('@lykmapipo/env');
const categories = getStrings('CATEGORIES');
//=> ['Fashion', 'Technology']
```


##### Returns


- `Array.&lt;string&gt;`  environment value



#### getStringSet(key[, defaultValue]) 

Get array of unique sorted strings from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `Array.<string>`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getStringSet } = require('@lykmapipo/env');
const categories = getStringSet('CATEGORIES');
//=> ['Fashion', 'Technology']
```


##### Returns


- `Array.&lt;string&gt;`  environment value



#### getBoolean(key[, defaultValue]) 

Get boolean value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue | `boolean`  | value to return if key not exists | *Optional* |




##### Examples

```javascript
const { getBoolean } = require('@lykmapipo/env');
const debug = getBoolean('DEBUG'); //=> true
```


##### Returns


- `boolean`  environment value



#### getObject(key[, defaultValue&#x3D;{}]) 

Get plain object value from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  | value key | &nbsp; |
| defaultValue&#x3D;{} | `object`  | value to return if key not exists | *Optional* |




##### Examples

```javascript

const { getObject } = require('@lykmapipo/env');

const object = getObject('OBJECT');
// => { lead: { ref: 'Person' } ... }

const object = getObject('OBJECT_NOT_EXIST');
// => {}
```


##### Returns


- `object`  environment value



#### is(env) 

Check if node environment is same as given




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string`  | value of env to test | &nbsp; |




##### Examples

```javascript
const { is } = require('@lykmapipo/env');
const test = is('TEST'); //=> true
```


##### Returns


- `boolean`  true if its a tested node environment else false



#### isTest() 

Check if node environment is test






##### Examples

```javascript
const { isTest } = require('@lykmapipo/env');
const test = isTest(); //=> true
```


##### Returns


- `boolean`  true if its a test node environment else false



#### isDevelopment() 

Check if node environment is development






##### Examples

```javascript
const { isDevelopment } = require('@lykmapipo/env');
const isDev = isDevelopment(); //=> true
```


##### Returns


- `boolean`  true if its a development node environment else false



#### isProduction() 

Check if node environment is production






##### Examples

```javascript
const { isProduction } = require('@lykmapipo/env');
const isProd = isProduction(); //=> true
```


##### Returns


- `boolean`  true if its a production node environment else false



#### isLocal() 

Check if node environment is development or test






##### Examples

```javascript
const { isLocal } = require('@lykmapipo/env');
const local = isLocal(); //=> true
```


##### Returns


- `boolean`  true if its a development or test node environment else false



#### isHeroku() 

Check if runtime environment is heroku






##### Examples

```javascript
const { isHeroku } = require('@lykmapipo/env');
const heroku = isHeroku(); //=> true
```


##### Returns


- `boolean`  true if its runtime environment is heroku else false



#### apiVersion([optns]) 

Parse api version from environment variable




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| optns | `object`  | valid options | *Optional* |
| optns.version&#x3D;1.0.0 | `string`  | value to use to parse api version | *Optional* |
| optns.prefix&#x3D;v | `string`  | prefix to set on parsed api version | *Optional* |
| optns.major&#x3D;true | `boolean`  | whether to allow major part | *Optional* |
| optns.minor&#x3D;false | `boolean`  | whether to allow minor part | *Optional* |
| optns.patch&#x3D;false | `boolean`  | whether to allow patch part | *Optional* |




##### Examples

```javascript
const { apiVersion } = require('@lykmapipo/env');
const version = apiVersion(); //=> v1
const version = apiVersion({ version: '2.0.0' }); //=> v2
```


##### Returns


- `string`  parsed environment api version



#### getLocale([defaultLocale&#x3D;&#x27;sw&#x27;]) 

Obtain runtime locale




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| defaultLocale&#x3D;&#x27;sw&#x27; | `string`  | valid default locale | *Optional* |




##### Examples

```javascript
const { getLocale } = require('@lykmapipo/env');
const locale = getLocale(); //=> sw
```


##### Returns


- `string`  valid runtime locale



#### getCountryCode([defaultCountryCode&#x3D;&#x27;TZ&#x27;]) 

Obtain runtime country code




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| defaultCountryCode&#x3D;&#x27;TZ&#x27; | `string`  | valid default country code | *Optional* |




##### Examples

```javascript
const { getCountryCode } = require('@lykmapipo/env');
const countryCode = getCountryCode(); //=> TZ
```


##### Returns


- `string`  valid runtime country code




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
