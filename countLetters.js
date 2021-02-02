const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {

  if (!str.length) return '';

  const res = {};

  for (let c of str) {
    if (c.match(/[a-z]/i)) {
      if (res[c]) res[c] += 1;
      else res[c] = 1;
    }
  }

  return res;

};

let res1 = countLetters("lighthouse in the house");
let test1 = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

for (const letter in test1) {
  assertEqual(test1[letter], res1[letter]);
}