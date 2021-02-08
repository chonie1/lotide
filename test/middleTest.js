const middle = require('../middle');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return [] for one element', () => {
    assert.deepEqual(middle([1]),[])
  });

  it('should return 1 number for an odd number of elements', ()=> {
    assert.deepEqual(middle([1,2,3,4,5]), [3])
  })


  it('should return two numbers for an even number of elements', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4])
  });



})

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);