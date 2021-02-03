const { x } = require("joi");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {

  for (const key in obj) {
    console.log(obj[key]);
    if (callback(obj[key])) return key;
  }
  return;

};

const res1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(res1, "noma");
assertEqual(findKey({},x => x.stars === 2), undefined);

const res2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.moon === 2);
assertEqual(res2, undefined);

const res3 = findKey({
  "Blue Hill": { stars: 1, moon: 1},
  "Akaleri":   { stars: 3 },
}, x => x.moon === 1);
assertEqual(res3, "Blue Hill");