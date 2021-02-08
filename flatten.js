const flatten = function(arr) {

  let res = [];

  function flattenArr(arr) {
    if (!arr.length) return res;

    for (let elem of arr) {
      if (Array.isArray(elem)) {
        flattenArr(elem);
      } else {
        res.push(elem);
      }
    }

    return res;
  }

  return flattenArr(arr);
  
};

module.exports = flatten;
