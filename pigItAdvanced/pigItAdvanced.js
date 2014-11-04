function pigIt(str){
	// split words into an array to operate on each word individually
  var wordArray = str.split(' ');

  // create placeholder string to store our results
  var resultString = '';

  // loop through each word, testing edge cases as necessary
  wordArray.forEach(function(word) {
  	// edge case variables
  	var isCapital = false;
  	var isVowel = false;
  	var hasPunctuation = false;

  	// test if first letter is uppercase
  	if (word[0].toUpperCase() === word[0]) {
  		isCapital = true;
  	}

  	// test if first letter is vowel
  	if (word[0].toLowerCase().match(/[aeiou]/)) {
  		isVowel = true;
  	}

  	// test if sentence has punctuation
  	if (word.match(/\W/)) {
  		hasPunctuation = true;
  	}
  	
  	// base case
  	if (!isCapital && !isVowel && !hasPunctuation) {
    	var firstLetter = word[0];
    	resultString += word.substr(1) + firstLetter + 'ay ';
    } else {
    	var alteredResultString = '';
	    // if first letter is vowel, we don't want to do anything in terms of changing capitalization
	    if (isVowel) {
	    	alteredResultString += word + 'way ';
	    }

	    // if first letter is capital and is not a vowel
	    if (isCapital && !isVowel) {
	    	var firstLetter = word[0];
	    	var secondLetter = word[1];
	    	alteredResultString += secondLetter.toUpperCase() + word.substr(2) + firstLetter.toLowerCase() + 'ay ';
	    }

	    // if there is punctuation
	    if (hasPunctuation) {
	    	if (alteredResultString !== '') {
	    		word = alteredResultString.trim();
	    	}

	    	var punctuationArray = [];
	    	for (var i = 0; i < word.length; i++) {
	    		if (word[i].match(/\W/)) {
	    			punctuationArray.push(word[i]);
	    			word[i] = '';
	    		}
	    	}
	    	punctuationArray.forEach(function(punctuation) {
	    		alteredResultString += punctuation;
	    	});
	    }

	    resultString += alteredResultString;
	  }

  });
  return resultString.trim();
};

console.log(pigIt('Pizza? Yes Please!!'));