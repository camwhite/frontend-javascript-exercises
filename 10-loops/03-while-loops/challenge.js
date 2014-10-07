module.exports.stream = function(conditionalFn, actionFn) {
  while(conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(array) {
  var returnVar = 0;
  while(array.length > 0) {
    returnVar += array.pop();
  }
  return returnVar;
};

