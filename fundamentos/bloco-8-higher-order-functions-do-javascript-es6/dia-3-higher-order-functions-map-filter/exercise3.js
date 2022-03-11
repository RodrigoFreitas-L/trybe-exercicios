const books = require('./obj');

const sciFiAndFantasy = () => books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');

console.log(sciFiAndFantasy());