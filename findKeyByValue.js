const findKeyByValue = function(obj,val) {

  const keys = Object.keys(obj);
  
  if (!keys.length) return;

  for (const key of keys) {
    if (obj[key] === val) return key;
  }

  return;

};

module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue({}, "That '70s Show"), undefined);
// assertEqual(findKeyByValue({"":""}, ""), "");
// assertEqual(findKeyByValue({}, ""), undefined);