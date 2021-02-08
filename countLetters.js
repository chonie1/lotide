const countLetters = function(str) {
  
  const res = {};
  if (!str.length) return {};

  for (let c of str) {
    if (c.match(/[a-z]/i)) {
      if (res[c]) res[c] += 1;
      else res[c] = 1;
    }
  }

  return res;

};

module.exports = countLetters;
