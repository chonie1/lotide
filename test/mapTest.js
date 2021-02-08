const map = require('../map')
const assert = require('chai').assert

describe('#map', ()=>{
  it('should return the first element given the following callback',()=>{

    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g','c','t','m','t']);
  })


})
