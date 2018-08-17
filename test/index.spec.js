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
const env = require(path.join(__dirname, '..'));
const {
  getNumber,
  getArray,
  getString,
  getStrings,
  getNumbers,
  getBoolean
} = env;

describe('parsed', function () {

  it('should be able to get raw value', function () {
    const value = env('LOCALES');
    expect(value).to.exist;
    expect(value).to.be.equal(process.env.LOCALES);
  });

  it('should be able to get raw value', function () {
    const value = env('Any', 'Any');
    expect(value).to.exist;
    expect(value).to.be.equal('Any');
  });

  it('should be able to get string value', function () {
    const value = getString('DEFAULT_COUNTRY_CODE');
    expect(value).to.exist;
    expect(value).to.be.a('string');
    expect(value).to.be.equal('TZ');
  });

  it('should be able to get string value', function () {
    const value = getString('DEFAULT_CITY', 'Dar es salaam');
    expect(value).to.exist;
    expect(value).to.be.a('string');
    expect(value).to.be.equal('Dar es salaam');
  });

  it('should be able to get number value', function () {
    const value = getNumber('DEFAULT_AGE');
    expect(value).to.exist;
    expect(value).to.be.a('number');
    expect(value).to.be.equal(14);
  });

  it('should be able to get number value', function () {
    const value = getNumber('DEFAULT_PRICE', 55.11);
    expect(value).to.exist;
    expect(value).to.be.a('number');
    expect(value).to.be.equal(55.11);
  });

  it('should be able to get boolean value', function () {
    const value = getBoolean('DEBUG', false);
    expect(value).to.exist;
    expect(value).to.be.a('boolean');
    expect(value).to.be.true;
  });

  it('should be able to get array value', function () {
    const value = getArray('LOCALES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['en', 'sw', 'fr']);
  });

  it('should be able to get array value', function () {
    const value = getArray('ANIMALS', ['elephant']);
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['elephant']);
  });

  it('should be able to get array of strings', function () {
    const value = getStrings('ALLOWED_AGES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql(['14', '15', '16']);
  });

  it('should be able to get array of numbers', function () {
    const value = getNumbers('ALLOWED_AGES');
    expect(value).to.exist;
    expect(value).to.be.an('array');
    expect(value).to.be.eql([14, 15, 16]);
  });

  it('should be able to get base path', function () {
    const value = env('BASE_PATH');
    expect(value).to.exist;
    expect(value).to.be.equal(process.env.BASE_PATH);
  });

  it('should be able to .env value', function () {
    let value = env('PORT');
    expect(value).to.exist;
    expect(value).to.be.equal('5000');
    value = getNumber('PORT');
    expect(value).to.exist;
    expect(value).to.be.equal(5000);
  });

});
