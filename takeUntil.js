const takeUntil = function(array, callback) {
  
  if (!array.length) return [];

  for (const [i,elem] of array.entries()) {
    if (callback(elem)) return array.slice(0,i);
  }

  return array;

};

module.exports = takeUntil;
