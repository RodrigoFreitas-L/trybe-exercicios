const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentAvg = () => {
  const nameAndAvg = students.map((student, i) => (
    {
      name: student,
      averageNote: (grades[i].reduce((a, b) => a + b, 0) / grades[i].length),
    }
  ));
  return nameAndAvg;
};

console.log(studentAvg());

const bookNames = ['Livro1', 'Livro2', 'Livro3', 'Livro4', 'Livro5'];
const year = [1999, 2000, 2001, 2002, 2003];

const bookNamesAndYear = () => {
  return bookNames.map((book, index) => (
    {
      name: book,
      year: (year[index]),
    }
  ));
};

console.log(bookNamesAndYear());