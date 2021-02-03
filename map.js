const eqArrays = function(arr1, arr2) {
  let n = arr1.length;
  
  if (n !== arr2.length) return false;

  for (let i  = 0; i < n; i ++) {
    if (arr1[i] !== arr2[i]) return false;
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

const map = function(arr, callback) {

  const res = [];
  for (const elem of arr) {
    res.push(callback(elem));
  }

  return res;

};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual([], []);