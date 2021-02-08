const without = require('../without')
const assert = require('chai').assert

describe('#without', ()=>{
  it('should return the source if the source is empty', ()=>{
    assert.deepEqual(without([], [1,2,3]), []); 
  })

  it('should return the source if nothing to remove', ()=>{
    assert.deepEqual(without([1,2,3], []), [1,2,3]); 
  })

  it('should remove elements based on type',()=>{
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
  })


})