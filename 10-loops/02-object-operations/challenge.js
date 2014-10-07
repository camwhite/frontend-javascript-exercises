module.exports.copy = function(obj) {
  newObj = {};
  for(var prop in obj) {
    newObj[prop] = obj[prop];
  }
  return newObj;
};

module.exports.extend = function(dest, src) {
  for(var prop in src) {
    dest[prop] = src[prop];
  }
  return dest;
};

module.exports.hasElems = function(obj, array) {
  var returnVar = true;
  array.forEach(function(key) {
    if(! obj.hasOwnProperty(key)) {
      returnVar = false;
    }
  });
  return returnVar;
};