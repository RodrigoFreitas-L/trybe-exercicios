const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());

const secondWay = () => {
  return arrays.reduce((acc, curr) => {
    for (const iterator of curr) {
      acc.push(iterator)
    }
    return acc;
  }, [])
}

console.log(secondWay());