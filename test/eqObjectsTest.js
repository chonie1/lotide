const assert = require('chai').assert
const eqObjects = require('../eqObjects');

describe('eqObjects', ()=>{
  it('should return true if all elements in the object are equal regardless of nesting',()=>{
    assert.deepEqual(eqObjects({ a: { z: [1,2,[3,4]] }, b: 2 }, { a: { z: [1,2,[3,4]] }, b: 2 }), true); // => true
  })

})
