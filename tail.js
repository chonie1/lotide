const tail = function(arr) {
  if (!arr.length) return [];
  return arr.slice(1);
};

module.exports = tail;
