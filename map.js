const map = function(arr, callback) {

  const res = [];
  for (const elem of arr) {
    res.push(callback(elem));
  }

  return res;

};

module.exports = map;

