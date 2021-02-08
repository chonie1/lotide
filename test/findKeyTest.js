const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey', ()=>{
  it('should return the key if found given the callback', ()=>{
    const obj = {
      "Blue Hill": { stars: 1, moon: 1},
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    assert.strictEqual(findKey(obj, callback), 'noma');
  });

  it('should return undefined if nothing matches', ()=>{
    const obj = {
      "Blue Hill": { stars: 1, moon: 1},
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 5;
    assert.strictEqual(findKey(obj, callback), undefined);
  });

  it('should return the key if there are multiple keys', ()=>{
    const obj = {
      "Blue Hill": { stars: 1, moon: 1},
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.moon === 1;
    assert.strictEqual(findKey(obj, callback), 'Blue Hill');
  });


});