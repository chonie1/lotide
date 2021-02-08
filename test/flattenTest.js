const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten',()=>{
  it('should return a flattened array',()=>{
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]],[]), [1, 2, 3, 4, 5,6]);
  });

  it('should return a flattened array if some elements are empty',()=>{
    assert.deepEqual(flatten(['',[]],[]), ['']);
  });


});
