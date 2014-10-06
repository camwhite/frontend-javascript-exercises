module.exports.favoriteNumber = function(fav, guess) {
  if(guess > fav) {
    return "Too high";
  }
  else if(guess < fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(one, two, three, four) {
  if((one === 3 || one === 5 || one === 7) && (two === 2) && ((5 <= three) && (three <= 100)) && ((four < 9) || (four > 20))) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if(item === "MacBook Air" && money >= 999) {
    return true;
  }
  else if(item === "MacBook Pro" && money >= 1299) {
    return true;
  }
  else if(item === "Mac Pro" && money >= 2499) {
    return true;
  }
  else if(item === "Apple Sticker" && money >= 1) {
    return true;
  }
  else {
    return false;
  }
};