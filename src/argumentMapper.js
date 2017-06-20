function createArgumentMap(fn, ...rest) {
  const fnStr = fn.toString();
  const s = fnStr.indexOf('(') + 1;
  const e = fnStr.indexOf(')');
  const argNames = fnStr.slice(s, e).split(',');

  if (!rest.length) {
    return rest;
  }

  return argNames.reduce((acc, curr, index) => {
    acc[curr] = rest[index];
    return acc;
  }, {});
}

export default createArgumentMap;
