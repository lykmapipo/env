'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


process.env.BASE_PATH = path.resolve(__dirname);
process.env.LOCALES = 'en,sw,fr';
process.env.DEFAULT_COUNTRY_CODE = 'TZ';
process.env.DEFAULT_CITY = 'Dar es salaam';
process.env.DEFAULT_AGE = 14;
process.env.ALLOWED_AGES = '14,15, 16';
process.env.CONTENT_TYPES = 'FAQ,Tariff';


/* declarations */
const {
  get,
  set,
  getNumber,
  getArray,
  getString,
  getStrings,
  getNumbers,
  getBoolean,
  is,
  isTest,
  isProduction,
  isLocal,
  isDevelopment,
  apiVersion
} = require(path.join(__dirname, '..'));

describe('env', () => {

  it('should be able to get raw value', () => {
    const value = get('LOCALES');
    expect(value).to.exist;
    expect(value).to.be.equal(process.env.LOCALES);
  });

  it('should be able set raw value', () => {
    const SOME = set('SOME', 'Some');
    const value = get('SOME');
    expect(value).to.exist;
    expect(value).to.be.equal(SOME);
  });

  it('should be able to get raw value', () => {
    const value = get('Any', 'Any');
    expect(value).to.exist;
    expect(value).to.be.equal('Any');
  });

  it('should be able to get string value', () => {
    const value = getString('DEFAULT_COUNTRY_CODE');
    expect(value).to.exist;
    expect(value).to.be.a('string');
    expect(value).to.be.equal('TZ');
  });

  it('should be able to get string value', () => {
    const value = getString('DEFAULT_CITY', 'Dar es salaam');
    expect(value).to.exist;
    expect(value).to.be.a('string');
    expect(value).to.be.equal('Dar es salaam');
  });

  it('should be able to get number value', () => {
    const value = getNumber('DEFAULT_AGE');
    expect(value).to.exist;
    expect(value).to.be.a('number');
    expect(value).to.be.equal(14);
  });

  it('should be able to get number value', () => {
    const value = getNumber('DEFAULT_PRICE', 55.11);
    expect(value).to.exist;
    expect(value).to.be.a('number');
    expect(value).to.be.equal(55.11);
  });

  it('should be able to get boolean value', () => {
    const value = getBoolean('DEBUG', false);
    expect(value).to.exist;
    expect(value).to.be.a('boolean');
    expect(value).to.be.true;
  });

  it('should be able to get array value', () => {
    const value = getArray('LOCALES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['en', 'sw', 'fr']);
  });

  it('should be able to get array value', () => {
    const value = getArray('ANIMALS', ['elephant']);
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['elephant']);
  });

  it('should be able to get array of strings', () => {
    const value = getStrings('ALLOWED_AGES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['14', '15', '16']);
  });

  it('should be able to get array of numbers', () => {
    const value = getNumbers('ALLOWED_AGES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql([14, 15, 16]);
  });

  it('should be able to get base path', () => {
    const value = get('BASE_PATH');
    expect(value).to.exist;
    expect(value).to.be.equal(process.env.BASE_PATH);
  });

  it('should be able to get .env value', () => {
    let value = get('PORT');
    expect(value).to.exist;
    expect(value).to.be.equal('5000');
    value = getNumber('PORT');
    expect(value).to.exist;
    expect(value).to.be.equal(5000);
  });

  it('should be able to get .env value', () => {
    let value = get('LOG');
    expect(value).to.exist;
    expect(value).to.be.equal('false');
    value = getBoolean('LOG');
    expect(value).to.exist;
    expect(value).to.be.false;
  });


  it('should be able to test node environment', () => {
    expect(is).to.exist;
    expect(is).to.be.a('function');

    expect(isTest).to.exist;
    expect(isTest).to.be.a('function');

    expect(isDevelopment).to.exist;
    expect(isDevelopment).to.be.a('function');

    expect(isProduction).to.exist;
    expect(isProduction).to.be.a('function');

    expect(isLocal).to.exist;
    expect(isLocal).to.be.a('function');
  });

  it('should be able to tell current node env', () => {
    expect(isTest).to.exist;
    expect(isTest()).to.be.true;
    expect(isLocal()).to.be.true;
    expect(isProduction()).to.be.false;
    expect(isDevelopment()).to.be.false;
  });

  it('should be able to compute api version', () => {
    const version = apiVersion();
    expect(version).to.exist;
    expect(version).to.be.equal('v1');

    expect(apiVersion({ minor: true })).to.be.equal('v1.0');
    expect(apiVersion({ patch: true })).to.be.equal('v1.0.0');
    expect(apiVersion({ version: 2 })).to.be.equal('v2');
  });

});
