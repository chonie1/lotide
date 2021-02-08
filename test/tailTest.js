const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test Case 1
let words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(result.length, 2); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2
words = ["Yo Yo"];
result = tail(words);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);

// Test Case 3
words = [];
result = tail(words);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
