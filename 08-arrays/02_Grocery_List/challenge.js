module.exports.addItem = function(itemToAdd, array) {
  if(array.indexOf(itemToAdd) === -1) {
    array.push(itemToAdd);
  }
  return array
};

module.exports.reverseSortedList = function(array) {
  return array.sort().reverse();
};