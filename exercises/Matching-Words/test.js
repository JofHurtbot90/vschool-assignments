const chai = require('chai');
const assert = chai.assert;

const matching = require('./main');


describe('A function that contains an array of every word repeated more than once ina a string', () => {
  it('Should return an array of each repeated word', () => {
    assert.deepEqual(matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.", ['far', 'lever', 'on', 'pull', 'right', 'the'])
  });
});
