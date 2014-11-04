function pick(bags, scale) {
  // scale.weigh([bags[0]], [bags[1]]); returns -1, 0 or 1

  // set placeholder number
  var bagIndex;

  // test first three, second three bags
  var firstPass = scale.weigh([bags[0], bags[1], bags[2]], [bags[3], bags[4], bags[5]]);

  // act according to result of scale
  if (firstPass === -1) {
  	var secondPass = scale.weigh([bags[0]], [bags[1]]);
  	if (secondPass === -1) {
  		bagIndex = 0;
  	} else if (secondPass === 1) {
  		bagIndex = 1;
  	} else {
  		bagIndex = 2;
  	}
  } else if (firstPass === 1) {
  	var secondPass = scale.weigh([bags[3]], [bags[4]]);
  	if (secondPass === -1) {
  		bagIndex = 3;
  	} else if (secondPass === 1) {
  		bagIndex = 4;
  	} else {
  		bagIndex = 5;
  	}
  } else {
  	var secondPass = scale.weigh([bags[6]], [bags[7]]);
  	if (secondPass === -1) {
  		bagIndex = 6;
  	} else if (secondPass === 1) {
  		bagIndex = 7;
  	} else {
  		bagIndex = 8;
  	}
  }

  return bags[bagIndex];
};

// first pass, do first three, second three
// if one of them is heavier, do one of each and act accordingly
// if they are equal, do the second test on bags 7 - 9