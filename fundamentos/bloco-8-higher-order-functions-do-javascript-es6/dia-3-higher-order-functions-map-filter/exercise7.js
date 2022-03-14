const books = require('./obj');

// Para retornar o primeiro nome do livro em que o nome do autor tenha 3 '.' (pontos) no inicio;

const authorWith3Dots = () => {
  return books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}

console.log(authorWith3Dots());

// Para retornar o nome de todos os livros em que o nome do Autor tenha 3 '.' (pontos) no inicio;

function authorWith3DotsOnName() {
// escreva seu código aqui
  return books.filter((item) => /.*\. .*\. .*\./.test(item.author.name)).map((element) => element.name);
};

console.log(authorWith3DotsOnName());