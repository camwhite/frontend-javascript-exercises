module.exports.sumNumbers = function(array) {
  returnVar = 0;
  for(var i = 0; i < array.length; i++) {
    returnVar += array[i];
  }
  return returnVar;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(',')
};

module.exports.addIndex = function(array) {
  return array.map(function(element, index) {
    return index + ' is ' + element; 
  });
};
