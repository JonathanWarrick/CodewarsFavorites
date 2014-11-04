function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  // debugger;
  // set initial results to entire dictionary array to start
  var results = this.words;
  
  // loop through each character, testing each remaining word in dictionary
  for (var i = 0; i < pattern.length; i++) {
    // check if pattern character is ? (skip these)
    if (pattern[i] !== '?') {
      // check each word in dictionary at corresponding index
      // delete from words array if not a match
      // NOTE: loop through in reverse to avoid splice issues
      var arrayLength = results.length;
      while (arrayLength--) {
        if (results[arrayLength].charAt(i) !== pattern[i]) {
          results.splice(arrayLength, 1);
        }
      }
    }
  }
  return results;
};

// var test = new Dictionary(["apple","banana","blackberry","cherry","lemon","lime","melon","orange","papaya","pineapple","raspberry","strawberry"]);
