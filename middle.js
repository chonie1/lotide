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

const middle = function(arr) {

  const len = arr.length;

  if (len <= 2) return [];

  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? arr.slice(mid - 1, mid + 1) : [arr[mid]];

};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);