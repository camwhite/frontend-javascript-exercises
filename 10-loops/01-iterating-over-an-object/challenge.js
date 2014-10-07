module.exports.getKeys = function(obj) {
    var array = [];
    for(var key in obj) {
      array.push(key);
    }
    return array;
};

module.exports.getValues = function(obj) {
  var array = [];
  for(var prop in obj) {
    array.push(obj[prop]);
  }
  return array;
};

module.exports.objectToArray = function(obj) {
  var keys = Object.keys(obj);
  return keys.map(function(key) {
    return key + " is " + obj[key];
  })
};