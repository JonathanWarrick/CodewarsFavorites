function solution(digits) {
	// create starting solution
  var maxDigits = digits.substr(0, 5);

  // loop through string of digits, testing as we go
  // stop when we are at last five-digit string
  for (var i = 1; i < digits.length - 4; i++) {
  	var testDigits = digits.substr(i, 5);
  	if (+testDigits > +maxDigits) {
  		maxDigits = testDigits;
  	}
  }

  return +maxDigits;
};
