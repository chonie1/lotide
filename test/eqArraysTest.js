const assert = require('chai').assert
const eqArrays = require('../eqArrays');

describe('eqArrays', ()=>{
  it('should return true if all elements in the array are equal regardless of nesting',()=>{
    const arr1 = [[1,[2,[3,4]]]]
    const arr2 = [[1,[2,[3,4]]]]

    assert.deepEqual(eqArrays(arr1,arr2),true)
  })

})
