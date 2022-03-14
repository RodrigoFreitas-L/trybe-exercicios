const books = require('./obj');

let obj = [];

const sciFiOrFantasyAuthors = () => books.filter((element) => (element.genre === 'Fantasia' || element.genre === 'Ficção Científica')).map((element) => element.author.name);

obj = sciFiOrFantasyAuthors();

obj.sort();

console.log(obj);