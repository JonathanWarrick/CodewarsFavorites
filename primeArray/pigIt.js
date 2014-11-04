function pigIt(str){
  var wordArray = str.split(' ');
  var resultString = '';
  wordArray.forEach(function(word) {
    var firstLetter = word[0];
    resultString += word.substr(1) + firstLetter + 'ay ';
  });
  return resultString.trim();
};