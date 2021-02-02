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

const letterPositions = function(sentence) {
  
  const results = {};
  const n = sentence.length;

  if (!n) return results;

  for (let i = 0; i < n; i ++) {
    if (sentence[i].match(/[a-z]/i)) {
      if (results[sentence[i]]) results[sentence[i]].push(i);
      else results[sentence[i]] = [i];
    }

  }
  return results;
};

const res1 = letterPositions("lighthouse in the house");
const test1 = {
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

console.log(res1);

for (let letter in test1) {
  assertArraysEqual(test1[letter],res1[letter]);
}