var chai = require ('chai');
var assert= chai.assert;

var ipAddress = require('./app.js');


describe('A function that takes a string and determines whether it is a valid IPv4 address', function() {
  it('Should return a set of numbers is between 0 to 255', function() {
    assert.isTrue(ipAddress('124.23.54.90')
    );
  });
  it('Should return false if it is an invalid IP Address', function() {
    assert.isFalse(ipAddress('300.0.89.3'));
  });
  it('Should return false if there is a blank space', function() {
    assert.isFalse(ipAddress('30..4.1'));
  })
});
