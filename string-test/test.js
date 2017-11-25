const chai = require('chai');
const assert = chai.assert;
const withoutEnd2 = require('./app');

describe('Given a string, return without both first and last char of string. String may be any length even 0', () => {
  it('Should return string withouth first and last char', () => {
    assert.deepEqual(withoutEnd2('Hello World'), 'ello Worl');
  })
})
