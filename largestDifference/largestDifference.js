var largestDifference = function(data) {
  var maxDifference = 0;
  for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
      if (data[i] <= data[j] && j - i > maxDifference) {
        maxDifference = j - i;
      }
    }
  }
  return maxDifference;
};
