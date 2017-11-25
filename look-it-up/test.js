var chai = require('chai');
var assert = chai.assert;

var newWord = require('./main.js').newWord;
var search = require('./main.js').search;


describe('A dictionary to add and look up words', function(){
  it('Should store the word when added and its definition in the dictionary when added', function() {
  newWord('apple', 'crispy and delicious fruit');
  assert.equal(search('apple'), 'crispy and delicious fruit')
  });
  it('Should return null when we lookup a word not present', function() {
    assert.isUndefined(search('apple'))
  })
})
