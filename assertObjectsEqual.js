const eqArrays = function(arr1, arr2) {
  let n = arr1.length;
  
  if (n !== arr2.length) return false;
  

  for (let i  = 0; i < n; i ++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }  else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

assertObjectsEqual({ 'a': '1', 'b': 2 }, { 'b': 2, 'a': '1' });