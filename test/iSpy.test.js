import assert from 'assert';
import spyOn from '../src/iSpy.js';

describe('Spy function', () => {
  function returns1() { return 1; }
  let spy = spyOn(returns1);

  it('should log how many times a function has been called', () => {
    assert.equal(spy.callCount(), 0);
    assert.equal(spy.returned(1), false);
    assert.equal(spy.wasCalledWith('hello'), false);

    spy('hello', 'hi', 'howdy');
    spy('goodbye', 'bye', 'see ya');

    assert.equal(spy.callCount(), 2);
    assert.equal(spy.returned(1), true);
    assert.equal(spy.wasCalledWith('hi'), true);
    assert.equal(spy.wasCalledWith('bye'), true);

  });
});
