import assert from 'assert';
import fn from '../src/evilTwin.js';

const task = 'Returns a new object with all the same properties as obj, and with an additional property hasGoatee set to true';

describe(task, function() {
  it('Should work with simple objects', function() {
    var obj = { x: 324 };
    var twin = fn(obj);
    assert(twin.hasGoatee, 'twin.hasGoatee must be true');
    assert(obj.hasGoatee == null, 'original must not be modified');
  });
});
