const letterPositions = require('../letterPositions')
const assert = require('chai').assert

describe('#letterPositions', ()=>{

  it('should return letter positions as an array',()=>{

    const res1 = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };

    assert.deepEqual(letterPositions('lighthouse in the house'),res1)
  })

  it('should return an empty object if the string given is empty', ()=>{
    assert.deepEqual(letterPositions(''), {})

  }) 

})