var fibonacci = function(n) {
  var fibSequence = [];
  for (var i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      fibSequence.push(i);
    } else {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
  }
  return fibSequence[i - 1];
};
