const takeUntil = function(array, callback) {
  
  if (!array.length) return [];

  for (const [i,elem] of array.entries()) {
    if (callback(elem)) return array.slice(0,i);
  }

  return array;

};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1,2,5,7,2]);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2,['I\'ve','been','to','Hollywood']);

// assertArraysEqual(takeUntil([],x => x < 0),[]);
// assertArraysEqual(takeUntil([1],x => x < 0),[1]);
// assertArraysEqual(takeUntil([-1],x => x < 0),[]);