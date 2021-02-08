const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('should return the first element of an array', ()=>{
    assert.strictEqual(head([1,2,3]),1);
  });

  it("should return the only element if the length is one", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return undefined if input is an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
});

