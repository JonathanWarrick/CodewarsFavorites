var flatten = function() {
	debugger;
	// get params as an array
	var args = Array.prototype.slice.call(arguments, 0);
  
  // store results in temporary array
  var results = [];

  // loop through each item in the arguments array
  // if type of item is an array, call recursively
  var loopThrough = function(array, index) {
  	if (!(Array.isArray(array[index]))) {
  		results.push(array[index]);
  	} else {
  		loopThrough(array[index], 0);
  	}
  	if (index !== array.length - 1) {
  		loopThrough(array, index + 1);
  	}
  };

  // call initial function call
  loopThrough (args, 0);

  return results;
};
