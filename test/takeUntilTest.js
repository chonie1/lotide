const takeUntil = require('../takeUntil')
const assert = require('chai').assert

describe('#takeUntil',()=>{
  it('should return the array up until the given condition in the callback',()=>{
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1,2,5,7,2])
  })

  it('should return the array up until the given condition in the callback',()=>{
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2,['I\'ve','been','to','Hollywood']);
  })

  it('should return the array as is if none of the elements for the condition',()=>{
    assert.deepEqual(takeUntil([1],x => x < 0),[1]);
  })

  it('should return an empty array if all conditions match',()=>{
    assert.deepEqual(takeUntil([-1],x => x < 0),[]);
  })



})