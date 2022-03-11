const books = require('./obj');

const actualYear = 2022;

const oldBooksOrdered = () => books.filter((element) => (actualYear - element.releaseYear > 60)).sort((a, b) => a.releaseYear - b.releaseYear);

console.log(oldBooksOrdered());