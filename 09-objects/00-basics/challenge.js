module.exports.createCourse = function(prop1,prop2, prop3) {
   var obj = {
    title: prop1,
    duration: prop2,
    students: prop3
  }
  return obj
};

module.exports.addProperty = function(obj, newProp, newVal) {
  if(! obj.hasOwnProperty(newProp)) {
    obj[newProp] = newVal;
  }
  return obj;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
  obj = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  }
  return money >= obj[item]
};