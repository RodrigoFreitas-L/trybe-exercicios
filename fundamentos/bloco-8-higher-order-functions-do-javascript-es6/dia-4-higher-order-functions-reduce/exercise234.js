const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const reduceNames = () => {
//   return books.map((element) => `${element.author.name}`).reduce((acc, curr) => acc.concat(curr, []))
// }

// console.log(reduceNames());

const reduceNames = () => {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length -1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}

// console.log(reduceNames());

const avAge = () => {

  // const numOfBooks = books.length;
  // const sumOfAges = books.reduce((acc, curr) => (acc + (curr.releaseYear - curr.author.birthYear)), 0);
  // return sumOfAges / numOfBooks;

  return books
  .map((element) => element.releaseYear - element.author.birthYear)
  .reduce((acc, curr) => curr + acc) / books.length;
}

// console.log(avAge());

const longestBookName = () => {
  return books.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr;
    }
    return acc;
  });
};

console.log(longestBookName());

const longestAuthorName = () => {
  return books.reduce((a, b) => {
    if (b.author.name.length > a.author.name.length) {
      return b;
    }
    return a;
  });
}

// console.log(longestAuthorName());