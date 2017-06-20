import assert from 'assert';
import fn from '../src/argumentMapper.js';

describe('argumentMapper', () => {
  it('receives a function object as first parameter and an unknown number of arguments and return an associative array that maps the name of an argument and its related value.', () => {
    const func1 = function(foo, bar) { return 'baz'; }
    const ft1 = fn(func1, 'foo1', 'bar1');
    assert.equal(ft1['foo'] === 'foo1', true);
  });
});
