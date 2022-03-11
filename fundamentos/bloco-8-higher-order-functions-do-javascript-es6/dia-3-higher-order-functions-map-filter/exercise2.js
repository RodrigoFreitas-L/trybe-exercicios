const books = require('./obj');
// Adicione o código do exercício aqui:
const ageAndAuthor = () => books.map((element) => ({
  age: element.releaseYear - element.author.birthYear,
  author: element.author.name
}))
.sort((a, b) => a.age - b.age);

console.log(ageAndAuthor());