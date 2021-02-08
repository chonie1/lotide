const without = function(source, itemsToRemove) {
  
  if (!itemsToRemove.length || !source.length) return source;

  let itemsToRemoveMap = new Map();

  for (let item of itemsToRemove) {
    itemsToRemoveMap.set(item, item);
  }
  
  let res = [];
  
  for (let elem of source) {
    if (!itemsToRemoveMap.has(elem)) res.push(elem);
  }

  return res;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], []),[1, 2, 3]); // if no elements to remove, should just return source
// assertArraysEqual(without([], [1,2,3]), []); // => if no elements in source, return empty source
// assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// // without(words, ["lighthouse"]); // no need to capture return value for this test case
// // // Make sure the original array was not altered by the without function
// // assertArraysEqual(words, ["hello", "world", "lighthouse"]);