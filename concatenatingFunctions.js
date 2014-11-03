// Functional programming thrives from the reuse of functions. One core feature to extend the reuse is the concatenation of functions.

Function.prototype.pipe = function(func) {
	return function(a) {
		return func(this(a));
	}.bind(this);
};
