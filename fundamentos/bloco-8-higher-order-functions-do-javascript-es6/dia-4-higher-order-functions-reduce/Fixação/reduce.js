// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const higherNumber = (array) => {
//   let result = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > result) {
//       result = array[i];
//     }
//   } return result;
// }

// console.log(higherNumber(numbers));

// const getHigherNumber = (higherN, number) => ((higherN > number) ? higherN : number);

// const reduceHigherNumber = (array) => array.reduce(getHigherNumber, 0);

// console.log(reduceHigherNumber(numbers));

// const getEven = (number) => number % 2 === 0;

// const sumEven = (currentValue, number) => currentValue + number;

// const filterReduceNumbers = (array) => array.filter(getEven).reduce(sumEven);

// console.log(filterReduceNumbers(numbers));

// const sumPair = (a, b) => ((b % 2 === 0) ? a + b : a);

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => ((acc.nota > materia.nota) ? acc : materia);

const report = (students) => students.map((student) => ({name: student.nome, materia: student.materias.reduce(getBestClass).name}));

console.log(report(estudantes));

// console.log(reportStudentsShift(estudantes));

const mappingStudents = () => {
  return estudantes.map((elements) => (
    {
      name: elements.nome,
      materia: elements.materias.reduce((acc, curr) => acc.nota > curr.nota ? acc : curr).name
    }
  ))
};

console.log(mappingStudents());