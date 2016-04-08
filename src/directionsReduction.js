
function standStill(d1, d2) {
  if (!d1 || d1 === d2) { return; }

  return (d1 === 'NORTH' && d2 === 'SOUTH') ||
    (d1 === 'SOUTH' && d2 === 'NORTH') ||
    (d1 === 'EAST' && d2 === 'WEST') ||
    (d1 === 'WEST' && d2 === 'EAST');
}

function dirReduc(arr) {
  return arr.reduce((acc, curr) => {
    const end = acc.length - 1;
    if (!acc.length) {
      return [curr];
    } else if (standStill(acc[end], curr)) {
      return acc.slice(0, end);
    } else {
      return [...acc, curr];
    }
  }, []);
}

export default dirReduc;
