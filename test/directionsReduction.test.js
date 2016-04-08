import assert from 'assert';
import fn from '../src/directionsReduction';

const task = 'You have to write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).';

describe(task, () => {
  it("['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'] -> ['WEST']", () => {
    const dir = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
    assert.deepEqual(fn(dir), ['WEST']);
  });

  it("['NORTH', 'WEST', 'SOUTH', 'EAST'] -> ['NORTH', 'WEST', 'SOUTH', 'EAST']", () => {
    const dir = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    assert.deepEqual(fn(dir), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
  });

  it("['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'] -> []", () => {
    const dir = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'];
    assert.deepEqual(fn(dir), []);
  });
});
