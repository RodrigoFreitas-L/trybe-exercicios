const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
  .reduce((acc, curr) => acc + curr
  .split('')
  .reduce((accu, curre) => {
    if (curre === 'a' || curre === 'A') return accu + 1;
    return accu;
  }, 0), 0);
}

console.log(containsA());
