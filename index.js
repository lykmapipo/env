'use strict';


/* dependencies */
const _ = require('lodash');


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


/* exports env */
module.exports = exports = env;
