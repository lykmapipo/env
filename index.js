'use strict';


/* dependencies */
const path = require('path');
const _ = require('lodash');
const dotenv = require('dotenv');


/**
 * ensure process NODE_ENV
 * @default development
 */
process.env.NODE_ENV = (process.env.NODE_ENV || 'development');


/**
 * ensure process BASE_PATH
 * @default process.cwd()
 */
process.env.BASE_PATH =
  path.resolve(process.env.BASE_PATH || process.cwd());


/**
 * load configuration from .env file from BASE_PATH
 * @see  {@link https://github.com/motdotla/dotenv}
 */
dotenv.load({ path: path.resolve(process.env.BASE_PATH, '.env') });


/* definition */
function env(key, defaultValue) {
  const value = process.env[key] || defaultValue;
  return value;
}


/* helpers */
env.getArray = function getArray(key, defaultValue) {
  let value = [].concat(defaultValue);
  if (!_.isEmpty(key)) {
    value =
      ([].concat(value).concat(_.get(process.env, key, '').split(',')));
  }
  value = _.map(value, _.trim);
  return _.uniq(_.compact(value));
};

env.getNumbers = function getNumbers(key, defaultValue) {
  let numbers = env.getArray(key, defaultValue);
  numbers = _.map(numbers, function (number) { return Number(number); });
  return numbers;
};

env.getNumber = function getNumber(key, defaultValue) {
  let value = env(key, defaultValue);
  value = value ? Number(value) : value;
  return value;
};

env.getString = function getString(key, defaultValue) {
  let value = env(key, defaultValue);
  value = value ? String(value) : value;
  return value;
};

env.getStrings = function getStrings(key, defaultValue) {
  let strings = env.getArray(key, defaultValue);
  strings = _.map(strings, function (number) { return String(number); });
  return strings;
};

env.getBoolean = function getBoolean(key, defaultValue) {
  let value = env(key, defaultValue);
  if (value === 'false') { value = false; }
  if (value === 'true') { value = true; }
  value = value ? Boolean(value) : value;
  return value;
};


/* execution environment shortcuts */
env.is = function (_env) {
  return env('NODE_ENV') === _env;
};
env.isTest = env.is('test');
env.isDevelopment = env.isDev = env.is('development');
env.isProduction = env.isProd = env.is('production');
env.isLocal = (env.isTest || env.isDev);


/* exports env */
module.exports = exports = env;
