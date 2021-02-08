const eqArrays = function(arr1, arr2) {
  let n = arr1.length;
  
  if (n !== arr2.length) return false;
  
  for (let i  = 0; i < n; i ++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

