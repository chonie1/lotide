const eqArrays = function(arr1, arr2) {
  let n = arr1.length;
  
  if (n !== arr2.length) {
    return false;
  }

  for (let i  = 0; i < n; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  
  if (!itemsToRemove.length || !source.length) {
    return source;
  }

  let itemsToRemoveMap = {};

  for (let item of itemsToRemove) {
    itemsToRemoveMap[item] = item;
  }
  
  let res = [];
  
  for (let elem of source) {
    if (itemsToRemoveMap.hasOwnProperty(elem) && elem === itemsToRemoveMap[elem]) {
      continue;
    } else {
      res.push(elem);
    }
  }

  return res;
};

assertArraysEqual(without([1, 2, 3], []),[1, 2, 3]); // if no elements to remove, should just return source
assertArraysEqual(without([], [1,2,3]), []); // => if no elements in source, return empty source
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);