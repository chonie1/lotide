const findKeyByValue = function(obj,val) {

  const keys = Object.keys(obj);
  
  if (!keys.length || !val.length) return;

  for (const key of keys) {
    if (obj[key] === val) return key;
  }

  return;

};

module.exports = findKeyByValue;

