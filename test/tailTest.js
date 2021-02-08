const assert = require('chai').assert;
const tail = require('../tail');

describe('#test', ()=> {
  it('should return an empty array if the input is an empty array',()=>{
    assert.deepEqual(tail([]),[]);
  });

  it('should return an empty array if the input is only 1 element',()=>{
    assert.deepEqual(tail(["Yo Yo"]),[]);
  });

  it('should return all elements except for the first one',()=>{
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

});
