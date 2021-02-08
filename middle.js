const middle = function(arr) {

  const len = arr.length;

  if (len <= 2) return [];

  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? arr.slice(mid - 1, mid + 1) : [arr[mid]];

};

module.exports = middle;