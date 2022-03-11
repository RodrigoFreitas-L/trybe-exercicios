const books = require('./obj');

const authorWith3Dots = () => {
  return books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}

console.log(authorWith3Dots());