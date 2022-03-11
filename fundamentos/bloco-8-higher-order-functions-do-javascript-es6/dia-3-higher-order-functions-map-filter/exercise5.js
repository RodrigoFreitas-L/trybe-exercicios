const books = require('./obj');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

let obj = [];

const sciFiOrFantasyAuthors = () => books.filter((element) => (element.genre === 'Fantasia' || element.genre === 'Ficção Científica')).map((element) => element.author.name);

obj = sciFiOrFantasyAuthors();

obj.sort();

console.log(obj);