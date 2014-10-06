module.exports.reversePlusOne = function(array) {
  flipped = array.reverse();
  flipped.unshift(1);
  return flipped;
};

module.exports.plusesEverywhere = function(array) {
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};