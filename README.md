# env

[![Build module-starter](https://travis-ci.org/lykmapipo/env.svg?branch=master)](https://travis-ci.org/lykmapipo/env)
[![Dependencies module-starter](https://david-dm.org/lykmapipo/env.svg?style=flat-square)](https://david-dm.org/lykmapipo/env)

Helper utilities for accessing environment variables

*Note: To use [dotenv](https://github.com/motdotla/dotenv) make sure you put `.env` file in your root directory of your project or set `BASE_PATH` environment variable before require env*

## Requirements

- [NodeJS v8.11.1+](https://nodejs.org)
- [npm v5.6.0+](https://www.npmjs.com/)

## Installation

```sh
npm install --save lodash @lykmapipo/env
```

## Usage

```js
const env = require('@lykmapipo/env');
const { getString, getNumber, getStrings, getNumbers } = env;

...

const LOCALE = env('LOCALE', 'en');
const LOCALE = getString('LOCALE', 'en');
const LOCALES = getStrings('LOCALES', ['en']);

...

const PORT = getNumber('PORT', 9000);
const PORTS = getNumbers('PORTS', [3000, 9000, 8080]);

...

const DEBUG = getBoolean('DEBUG', false);

...

```

## Test

- Clone this repository

- Install all dependencies

```sh
npm install
```

- Then run test

```sh
npm test
```

## Contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## Licence

The MIT License (MIT)

Copyright (c) 2018 lykmapipo & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
