const books = require('./obj');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const actualYear = 2022;

const namedBooks60yd = () => books.filter((element) => (actualYear - element.releaseYear > 60)).map((element) => element.name);

console.log(namedBooks60yd());