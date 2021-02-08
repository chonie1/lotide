const map = function(arr, callback) {

  const res = [];
  for (const elem of arr) {
    res.push(callback(elem));
  }

  return res;

};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g','c','t','m','t']);
// assertArraysEqual([], []);