module.exports.newArray = function(index0, index1, index2, index3) {
  return [index0, index1, index2, index3];
};

module.exports.firstAndLast = function(array) {
  first = array[0];
  last = array[array.length - 1];
  return [first, last];
};