const letterPositions = function(sentence) {
  
  const results = {};
  const n = sentence.length;

  if (!n) return results;

  for (let i = 0; i < n; i ++) {
    if (sentence[i].match(/[a-z]/i)) {
      if (results[sentence[i]]) results[sentence[i]].push(i);
      else results[sentence[i]] = [i];
    }

  }
  return results;
};

module.exports = letterPositions;
