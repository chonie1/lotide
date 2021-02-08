const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue',()=>  {
  it('should return the key if the value is found', ()=>{
    const obj = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(obj, "The Wire"), 'drama');
  });

  it('should return undefined if the value is not found', ()=>{
    const obj = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(obj, "Attack on Titan"), undefined);
  });


  it('should return undefined if given an empty object',()=>{
    assert.strictEqual(findKeyByValue({}, "Attack on Titan"), undefined);
  });



});