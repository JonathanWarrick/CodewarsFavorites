function permutations(string) {
  var permutationResults = [];
  if (string.length === 1) {
    return [string];
  } else {
    for (var i = 0; i < string.length; i++) {
      var currentChar = string[i];
      var remainingChars = string.slice(0, i) + string.slice(i + 1);
      permutations(remainingChars).forEach(function(permutation) {
        permutationResults.push(currentChar + permutation);
      });
    }
  }
  return permutationResults.filter(function(result, index, array) {
    return array.indexOf(result) === index;
  });
};
