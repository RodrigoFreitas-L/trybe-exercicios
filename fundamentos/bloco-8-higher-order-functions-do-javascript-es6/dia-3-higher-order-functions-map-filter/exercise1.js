const books = require('./obj');

const formatedBookNames = () => books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

console.log(formatedBookNames());
