function prime(num) {
  debugger;
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  var results = [];
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
};

function isPrime(num) {
  // edge case of 0 and 1
  if (num === 0 || num === 1) {
    return false;
  }
  
  // Not optimal; only need to go up to sqrt of number
  for (var i = 2; i < (Math.floor(num / 2) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
