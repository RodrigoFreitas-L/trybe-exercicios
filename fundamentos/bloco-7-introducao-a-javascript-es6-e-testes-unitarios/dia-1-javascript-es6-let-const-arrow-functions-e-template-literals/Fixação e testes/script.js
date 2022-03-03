// function userInfo() {
//   let userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// }
// userInfo();
// console.log(userEmail);

// if (true) {
//   // inicio do escopo do if
//   var userAge = '20';
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// let userName = 'Isabella';
// let userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//   name: 'Cláudio',
//   id: '5489-2',
//   email: 'claudio@email.com',
// };

// userInfo.name = 'João';

// console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// const canDrive = (idade) => idade >= 18 ? `Pode dirigir` : `Não pode dirigir`;

// console.log(canDrive(22));
// console.log(canDrive(17));
// console.log(canDrive(18));