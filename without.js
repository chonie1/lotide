const without = function(source, itemsToRemove) {
  
  if (!itemsToRemove.length || !source.length) return source;

  let itemsToRemoveMap = new Map();

  for (let item of itemsToRemove) {
    itemsToRemoveMap.set(item, item);
  }
  
  let res = [];
  
  for (let elem of source) {
    if (!itemsToRemoveMap.has(elem)) res.push(elem);
  }

  return res;
};

module.exports = without;
