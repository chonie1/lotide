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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {

  if (!arr.length) {
    return [];
  }

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      flatten(elem);
    } else {
      res.push(elem);
    }
  }

  return res;

};

// Test Case
let res = [];
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5,6]);
res = [];
assertArraysEqual(flatten(['',[]]), ['']);


