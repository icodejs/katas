import assert from 'assert';
import fn from '../src/defaultArguments.js';

describe('function defaultArguments', () => {
  var add_;

  function add(a, b) {
    return a + b;
  }

  it('should takes a function as an argument, along with an object containing default values for that function\'s arguments, and returns another function which defaults to the right values', () => {
    add_ = fn(add, { b: 9 });
    assert.equal(add_(10), 19);
    assert.equal(add_(10, 5), 15);

    add_ = fn(add_, { b: 3 });
    assert.equal(add_(10), 13);
  });

});
