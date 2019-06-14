'use strict';

const path = require('path');
const semver = require('semver');
const dotenv = require('dotenv');
const osLocale = require('os-locale');
const lodash = require('lodash');

/**
 * @function load
 * @name load
 * @description load environment variables from .env file only once
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.7.0
 * @version 0.2.0
 * @static
 * @public
 * @example
 * const { load } = require('@lykmapipo/env');
 * const env = load();
 *
 */
const load = lodash.once(() => {
  // ensure BASE_PATH
  const BASE_PATH = process.env.BASE_PATH || process.cwd();
  // load .env file
  const path$1 = path.resolve(BASE_PATH, '.env');
  return dotenv.config({ path: path$1 });
});

/**
 * @function mapToNumber
 * @name mapToNumber
 * @description convert provided value to number
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.7.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { mapToNumber } = require('@lykmapipo/env');
 * const age = mapToNumber('3.2'); //=> 3.2
 *
 */
const mapToNumber = value => lodash.toNumber(value);

/**
 * @function mapToString
 * @name mapToString
 * @description convert provided value to string
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.7.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { mapToString } = require('@lykmapipo/env');
 * const age = mapToString(3.2); //=> '3.2'
 *
 */
const mapToString = value => lodash.toString(value);

/**
 * @function set
 * @name set
 * @description set environment variable
 * @param {String} key value key
 * @param {Mixed} [value] value to set on key
 * @return {Mixed} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { set } = require('@lykmapipo/env');
 * const BASE_PATH = set('BASE_PATH', process.cwd());
 *
 */
const set = (key, value) => {
  lodash.set(process.env, key, value);
  return value;
};

/**
 * @function get
 * @name get
 * @description get environment variable
 * @param {String} key value key
 * @param {Mixed} [defaultValue] value to return if key not exists
 * @return {Mixed} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { get } = require('@lykmapipo/env');
 * const BASE_PATH = get('BASE_PATH', process.cwd());
 *
 */
const get = (key, defaultValue) => {
  // ensure .env is loaded
  load();
  // get value
  const value = lodash.get(process.env, key, defaultValue);
  return value;
};

/**
 * @function clear
 * @name clear
 * @description clear environment variables
 * @param {String|...String} keys valid keys
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.9.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { clear } = require('@lykmapipo/env');
 * clear('BASE_PATH');
 * process.env.BASE_PATH //=> undefined
 *
 */
const clear = (...keys) => {
  lodash.forEach([...keys], key => {
    delete process.env[key];
  });
};

/**
 * @function getArray
 * @name getArray
 * @description get array value from environment variable
 * @param {String} key value key
 * @param {Array} [defaultValue] value to return if key not exists
 * @return {Array} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getArray } = require('@lykmapipo/env');
 * const categories = getArray('CATEGORIES'); //=> ['Fashion', 'Technology']
 *
 */
const getArray = (key, defaultValue) => {
  let value = [].concat(defaultValue);
  if (!lodash.isEmpty(key)) {
    value = [...value, ...get(key, '').split(',')];
  }
  value = lodash.map(value, lodash.trim);
  value = lodash.uniq(lodash.compact(value));
  return value;
};

/**
 * @function getNumbers
 * @name getNumbers
 * @description get array of numbers from environment variable
 * @param {String} key value key
 * @param {Number[]} [defaultValue] value to return if key not exists
 * @return {Number[]} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getNumbers } = require('@lykmapipo/env');
 * const ages = getNumbers('AGES'); //=> [11, 18]
 *
 */
const getNumbers = (key, defaultValue) => {
  let numbers = getArray(key, defaultValue);
  numbers = lodash.map(numbers, mapToNumber);
  return numbers;
};

/**
 * @function getNumber
 * @name getNumber
 * @description get number value from environment variable
 * @param {String} key value key
 * @param {Number} [defaultValue] value to return if key not exists
 * @return {Number} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getNumber } = require('@lykmapipo/env');
 * const defaultAge = getNumber('DEFAULT_AGE'); //=> 11
 *
 */
const getNumber = (key, defaultValue) => {
  let value = get(key, defaultValue);
  value = value ? mapToNumber(value) : value;
  return value;
};

/**
 * @function getString
 * @name getString
 * @description get string value from environment variable
 * @param {String} key value key
 * @param {String} [defaultValue] value to return if key not exists
 * @return {String} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getString } = require('@lykmapipo/env');
 * const category = getString('DEFAULT_CATEGORY'); //=> 'Fashion'
 *
 */
const getString = function getString(key, defaultValue) {
  let value = get(key, defaultValue);
  value = value ? mapToString(value) : value;
  return value;
};

/**
 * @function getStrings
 * @name getStrings
 * @description get array of strings from environment variable
 * @param {String} key value key
 * @param {String[]} [defaultValue] value to return if key not exists
 * @return {String[]} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getStrings } = require('@lykmapipo/env');
 * const categories = getStrings('CATEGORIES'); //=> ['Fashion', 'Technology']
 *
 */
const getStrings = (key, defaultValue) => {
  let strings = getArray(key, defaultValue);
  strings = lodash.map(strings, mapToString);
  return strings;
};

/**
 * @function getBoolean
 * @name getBoolean
 * @description get boolean value from environment variable
 * @param {String} key value key
 * @param {Boolean} [defaultValue] value to return if key not exists
 * @return {Boolean} environment value
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getBoolean } = require('@lykmapipo/env');
 * const debug = getBoolean('DEBUG'); //=> true
 *
 */
const getBoolean = (key, defaultValue) => {
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
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { is } = require('@lykmapipo/env');
 * const test = is('TEST'); //=> true
 *
 */
const is = env => lodash.toLower(get('NODE_ENV')) === lodash.toLower(env);

/**
 * @function isTest
 * @name isTest
 * @description check if node environment is test
 * @return {Boolean} true if its a test node environment else false
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isTest } = require('@lykmapipo/env');
 * const test = isTest(); //=> true
 *
 */
const isTest = () => is('test');

/**
 * @function isDevelopment
 * @name isDevelopment
 * @description check if node environment is development
 * @return {Boolean} true if its a development node environment else false
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isDevelopment } = require('@lykmapipo/env');
 * const isDev = isDevelopment(); //=> true
 *
 */
const isDevelopment = () => is('development');

/**
 * @function isProduction
 * @name isProduction
 * @description check if node environment is production
 * @return {Boolean} true if its a production node environment else false
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isProduction } = require('@lykmapipo/env');
 * const isProd = isProduction(); //=> true
 *
 */
const isProduction = () => is('production');

/**
 * @function isLocal
 * @name isLocal
 * @description check if node environment is development or test
 * @return {Boolean} true if its a development or test node environment else false
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isLocal } = require('@lykmapipo/env');
 * const local = isLocal(); //=> true
 *
 */
const isLocal = () => isTest() || isDevelopment();

/**
 * @function isHeroku
 * @name isHeroku
 * @description check if runtime environment is heroku
 * @return {Boolean} true if its runtime environment is heroku else false
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { isHeroku } = require('@lykmapipo/env');
 * const heroku = isHeroku(); //=> true
 *
 */
const isHeroku = () => lodash.toLower(get('RUNTIME_ENV')) === 'heroku';

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
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { apiVersion } = require('@lykmapipo/env');
 * const version = apiVersion(); //=> v1
 * const version = apiVersion({ version: '2.0.0' }); //=> v2
 *
 */
const apiVersion = optns => {
  // ensure options
  const options = lodash.merge(
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
  let parsedApiVersion = parsedVersion.major;

  // allow minor
  if (minor) {
    parsedApiVersion = [parsedVersion.major, parsedVersion.minor].join('.');
  }

  // allow patch
  if (patch) {
    parsedApiVersion = [
      parsedVersion.major,
      parsedVersion.minor,
      parsedVersion.patch,
    ].join('.');
  }

  // return prefixed api version
  parsedApiVersion = `${prefix}${parsedApiVersion}`;
  return parsedApiVersion;
};

/**
 * @function getLocale
 * @name getLocale
 * @description Obtain runtime locale
 * @return {String} valid runtime locale
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.9.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getLocale } = require('@lykmapipo/env');
 * const locale = getLocale(); //=> sw
 *
 */
const getLocale = (defaultLocale = 'sw') => {
  // obtain os locale
  let locale = osLocale.sync() || osLocale.sync({ spawn: false }) || defaultLocale;

  // switch with environment locale
  locale = getString('DEFAULT_LOCALE', locale);

  // return derived locale
  return locale;
};

/**
 * @function getCountryCode
 * @name getCountryCode
 * @description Obtain runtime country code
 * @return {String} valid runtime country code
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.9.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 * const { getCountryCode } = require('@lykmapipo/env');
 * const countryCode = getCountryCode(); //=> TZ
 *
 */
const getCountryCode = (defaultCountryCode = 'TZ') => {
  // obtain runtime country code
  let countryCode = defaultCountryCode;

  // obtain from os locale parts
  if (lodash.size(getLocale().split('_')) > 1) {
    countryCode = lodash.last(getLocale().split('_'));
  }

  // obtain from os locale parts
  if (lodash.size(getLocale().split('-')) > 1) {
    countryCode = lodash.last(getLocale().split('-'));
  }

  // switch with environment country code
  countryCode = getString('DEFAULT_COUNTRY_CODE', countryCode);

  // return derived country code
  return countryCode;
};

exports.apiVersion = apiVersion;
exports.clear = clear;
exports.get = get;
exports.getArray = getArray;
exports.getBoolean = getBoolean;
exports.getCountryCode = getCountryCode;
exports.getLocale = getLocale;
exports.getNumber = getNumber;
exports.getNumbers = getNumbers;
exports.getString = getString;
exports.getStrings = getStrings;
exports.is = is;
exports.isDevelopment = isDevelopment;
exports.isHeroku = isHeroku;
exports.isLocal = isLocal;
exports.isProduction = isProduction;
exports.isTest = isTest;
exports.load = load;
exports.mapToNumber = mapToNumber;
exports.mapToString = mapToString;
exports.set = set;
