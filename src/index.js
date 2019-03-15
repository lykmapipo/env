'use strict';

/* dependencies */
import path from 'path';
import _ from 'lodash';
import semver from 'semver';
import dotenv from 'dotenv';

// ensure process NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// ensure process BASE_PATH
process.env.BASE_PATH = path.resolve(process.env.BASE_PATH || process.cwd());

// load configuration from .env file from BASE_PATH
dotenv.config({ path: path.resolve(process.env.BASE_PATH, '.env') });

/**
 * @function get
 * @name get
 * @description get environment variable
 * @param {String} key value key
 * @param {Mixed} [defaultValue] value to return if key not exists
 * @return {Mixed} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { get } = require('@lykmapipo/env');
 * const BASE_PATH = get('BASE_PATH', process.cwd());
 */
export const get = (key, defaultValue) => {
  const value = _.get(process.env, key, defaultValue);
  return value;
};

/**
 * @function set
 * @name set
 * @description set environment variable
 * @param {String} key value key
 * @param {Mixed} [value] value to set on key
 * @return {Mixed} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { set } = require('@lykmapipo/env');
 * const BASE_PATH = set('BASE_PATH', process.cwd());
 */
export const set = (key, value) => {
  _.set(process.env, key, value);
  return value;
};

/**
 * @function getArray
 * @name getArray
 * @description get array value from environment variable
 * @param {String} key value key
 * @param {Array} [defaultValue] value to return if key not exists
 * @return {Array} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getArray } = require('@lykmapipo/env');
 * const categories = getArray('CATEGORIES'); //=> ['Fashion', 'Technology']
 */
export const getArray = (key, defaultValue) => {
  let value = [].concat(defaultValue);
  if (!_.isEmpty(key)) {
    value = [...value, ...get(key, '').split(',')];
  }
  value = _.map(value, _.trim);
  value = _.uniq(_.compact(value));
  return value;
};

/**
 * @function getNumbers
 * @name getNumbers
 * @description get array of numbers from environment variable
 * @param {String} key value key
 * @param {Number[]} [defaultValue] value to return if key not exists
 * @return {Number[]} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getNumbers } = require('@lykmapipo/env');
 * const ages = getNumbers('AGES'); //=> [11, 18]
 */
export const getNumbers = (key, defaultValue) => {
  let numbers = getArray(key, defaultValue);
  numbers = _.map(numbers, number => Number(number));
  return numbers;
};

/**
 * @function getNumber
 * @name getNumber
 * @description get number value from environment variable
 * @param {String} key value key
 * @param {Number} [defaultValue] value to return if key not exists
 * @return {Number} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getNumber } = require('@lykmapipo/env');
 * const defaultAge = getNumber('DEFAULT_AGE'); //=> 11
 */
export const getNumber = (key, defaultValue) => {
  let value = get(key, defaultValue);
  value = value ? Number(value) : value;
  return value;
};

/**
 * @function getString
 * @name getString
 * @description get string value from environment variable
 * @param {String} key value key
 * @param {String} [defaultValue] value to return if key not exists
 * @return {String} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getString } = require('@lykmapipo/env');
 * const category = getString('DEFAULT_CATEGORY'); //=> 'Fashion'
 */
export const getString = function getString(key, defaultValue) {
  let value = get(key, defaultValue);
  value = value ? String(value) : value;
  return value;
};

/**
 * @function getStrings
 * @name getStrings
 * @description get array of strings from environment variable
 * @param {String} key value key
 * @param {String[]} [defaultValue] value to return if key not exists
 * @return {String[]} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getStrings } = require('@lykmapipo/env');
 * const categories = getStrings('CATEGORIES'); //=> ['Fashion', 'Technology']
 */
export const getStrings = (key, defaultValue) => {
  let strings = getArray(key, defaultValue);
  strings = _.map(strings, string => String(string));
  return strings;
};

/**
 * @function getBoolean
 * @name getBoolean
 * @description get boolean value from environment variable
 * @param {String} key value key
 * @param {Boolean} [defaultValue] value to return if key not exists
 * @return {Boolean} environment value
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getBoolean } = require('@lykmapipo/env');
 * const debug = getBoolean('DEBUG'); //=> true
 */
export const getBoolean = (key, defaultValue) => {
  let value = get(key, defaultValue);
  if (value === 'false') {
    value = false;
  }
  if (value === 'true') {
    value = true;
  }
  value = value ? Boolean(value) : value;
  return value;
};

/**
 * @function is
 * @name is
 * @description check if node environment is same as given
 * @param {String} env value of env to test
 * @return {Boolean} true if its a tested node environment else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { is } = require('@lykmapipo/env');
 * const test = is('TEST'); //=> true
 */
export const is = env => _.toLower(get('NODE_ENV')) === _.toLower(env);

/**
 * @function isTest
 * @name isTest
 * @description check if node environment is test
 * @return {Boolean} true if its a test node environment else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isTest } = require('@lykmapipo/env');
 * const test = isTest(); //=> true
 */
export const isTest = () => is('test');

/**
 * @function isDevelopment
 * @name isDevelopment
 * @description check if node environment is development
 * @return {Boolean} true if its a development node environment else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isDevelopment } = require('@lykmapipo/env');
 * const isDev = isDevelopment(); //=> true
 */
export const isDevelopment = () => is('development');

/**
 * @function isProduction
 * @name isProduction
 * @description check if node environment is production
 * @return {Boolean} true if its a production node environment else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isProduction } = require('@lykmapipo/env');
 * const isProd = isProduction(); //=> true
 */
export const isProduction = () => is('production');

/**
 * @function isLocal
 * @name isLocal
 * @description check if node environment is development or test
 * @return {Boolean} true if its a development or test node environment else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isLocal } = require('@lykmapipo/env');
 * const local = isLocal(); //=> true
 */
export const isLocal = () => isTest() || isDevelopment();

/**
 * @function isHeroku
 * @name isHeroku
 * @description check if runtime environment is heroku
 * @return {Boolean} true if its runtime environment is heroku else false
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isHeroku } = require('@lykmapipo/env');
 * const heroku = isHeroku(); //=> true
 */
export const isHeroku = () => _.toLower(get('RUNTIME_ENV')) === 'heroku';

/**
 * @function apiVersion
 * @name apiVersion
 * @description parse api version from environment variable
 * @param {Object} [optns]
 * @param {String} [optns.version=1.0.0] value to use to parse api version
 * @param {String} [optns.prefix=v] prefix to set on parsed api version
 * @param {Boolean} [optns.major=true] whether to allow major part
 * @param {Boolean} [optns.minor=false] whether to allow minor part
 * @param {Boolean} [optns.patch=false] whether to allow patch part
 * @return {String} parsed environment api version
 * @author lally elias <lallyelias87@mail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { apiVersion } = require('@lykmapipo/env');
 * const version = apiVersion(); //=> v1
 * const version = apiVersion({ version: '2.0.0' }); //=> v2
 */
export const apiVersion = optns => {
  // ensure options
  const options = _.merge(
    {},
    {
      version: '1.0.0',
      prefix: 'v',
      major: true,
      minor: false,
      patch: false,
    },
    optns
  );
  const { version, prefix, minor, patch } = options;

  // parse api version
  const parsedVersion = semver.coerce(getString('API_VERSION', version));

  // prepare exposed api version
  let apiVersion = parsedVersion.major;

  // allow minor
  if (minor) {
    apiVersion = [parsedVersion.major, parsedVersion.minor].join('.');
  }

  // allow patch
  if (patch) {
    apiVersion = [
      parsedVersion.major,
      parsedVersion.minor,
      parsedVersion.patch,
    ].join('.');
  }

  // return prefixed api version
  apiVersion = `${prefix}${apiVersion}`;
  return apiVersion;
};
