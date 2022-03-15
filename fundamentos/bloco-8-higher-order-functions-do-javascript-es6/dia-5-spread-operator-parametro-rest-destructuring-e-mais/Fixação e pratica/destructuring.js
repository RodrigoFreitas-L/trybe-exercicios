const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const {name, price, seller} = product;

// console.log(seller);

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;

// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi? 'é um Jedi' : 'não é um Jedi'}.`);


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const {workDays, weekend} = daysOfWeek;

const weekdays = [...workDays, ...weekend];

// console.log(weekdays);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// const {a: name, b: classAssigned, c: subject} = student;

// console.log(`Este(a) é ${name}, estuda na ${classAssigned} e gosta de ${subject}`);

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

