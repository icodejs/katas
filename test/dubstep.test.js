import assert from 'assert';
import fn from '../src/dubstep.js';

const task = 'Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.';

describe(task, () => {
  it('AWUBBWUBC -> A B C', () => {
    assert.equal(fn('AWUBBWUBC'), 'A B C');
  });

  it('WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB -> JKD WBIRAQKF YE WV', () => {
    assert.equal(fn('WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB'), 'JKD WBIRAQKF YE WV');
  });

  it('WUBWUBOWUBWUBWUBIPVCQAFWYWUBWUBWUBQWUBWUBWUBXHDKCPYKCTWWYWUBWUBWUBVWUBWUBWUBFZWUBWUB -> O IPVCQAFWY Q XHDKCPYKCTWWY V FZ', () => {
    assert.equal(fn('WUBWUBOWUBWUBWUBIPVCQAFWYWUBWUBWUBQWUBWUBWUBXHDKCPYKCTWWYWUBWUBWUBVWUBWUBWUBFZWUBWUB'), 'O IPVCQAFWY Q XHDKCPYKCTWWY V FZ');
  });

  it('WUWUBUBWUBUWUB -> WU UB U', () => {
    assert.equal(fn('WUWUBUBWUBUWUB'), 'WU UB U');
  });
});
