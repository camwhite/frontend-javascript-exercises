module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < 6;
};

module.exports.outsideRanges = function(number) {
  return ((10 <= number) !== (number <= 20)) && ((42 < number) !== (number <= 75)) && ((1 < number) !== (number < 6));
};

module.exports.nameAndPrice = function(name, price) {
  if(name === "NYTimes" && price >= 1) {
    return true;
  }
  else if(name === "LATimes" && price >= 1) {
    return true;
  }
  else {
    return false;
  }
};