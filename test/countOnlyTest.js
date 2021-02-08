const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', ()=>{
  it('should return an object if the key exists',()=>{
    const allItems = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = { "Jason": true, "Karima": true};
    const res = {'Jason': 1};
    
    assert.deepEqual(countOnly(allItems, itemsToCount), res);
  });

  it('should return an empty object if the input is empty', ()=>{
    assert.deepEqual(countOnly({},[]),{});
  });
});