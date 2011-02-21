/**
 * Calls iterator the specified number of times, passing in the number of the
 * current iteration as a parameter: 0 on first call, 1 on the second call, etc.
 *
 * @param {Function} iterator The iterator takes a single parameter, the number
 * of the current iteration.
 * @param {Object} [context] The optional context parameter specifies an object
 * to treat as <code>this</code> in the iterator block.
 *
 * @returns The number of times the iterator was called.
 * @type Number
 */
Number.prototype.times = function(iterator, context) {
  for(var i = 0; i < this; i++) {
    iterator.call(context, i);
  }

  return i;
};

Number.prototype.abs = function() {
  return Math.abs(this);
};

