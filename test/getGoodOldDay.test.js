import assert from 'assert';
import fn from '../src/getGoodOldDay.js';

describe('function getGoodOldDay', () => {
  it('should', () => {
    assert.equal(fn('19-11-0017'), 'Sunday');
    assert.equal(fn('5-7-53'), 'Saturday');
    assert.equal(fn('17-1-72'), 'Sunday');
    assert.equal(fn('4-6-7'), 'Monday');
    assert.equal(fn('25-3-92'), 'Tuesday');
    assert.equal(fn('3-9-0092'), 'Wednesday');
    assert.equal(fn('14-09-0050'), 'Wednesday');
    assert.equal(fn('12-8-78'), 'Friday');
    assert.equal(fn('07-6-42'), 'Saturday');
  });
});
