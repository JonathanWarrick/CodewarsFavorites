var palindromeChainLength = function(n) {
	var palindromeCounter = 0;

	var checkPalindrome = function(n) {
		if (!isPalindrome(n)) {
			checkPalindrome(n + reverseNumber(n));
			palindromeCounter++;
		}
	};

	checkPalindrome(n);

	return palindromeCounter;
};

var isPalindrome = function(number) {
	// convert number to string
	number = '' + number;

	// loop through number string, checking to see if outside is greater than inside
	for (var i = 0; i < number.length / 2; i++) {
		if (!(number[i] === number[number.length - 1 - i])) {
			return false;
		}
	}

	return true;
};

var reverseNumber = function(number) {
	// convert number to string
	number = '' + number;
	var reversedNumber = '';

	for (var i = number.length - 1; i >= 0; i--) {
		reversedNumber += number[i];
	}

	return +reversedNumber;
};
