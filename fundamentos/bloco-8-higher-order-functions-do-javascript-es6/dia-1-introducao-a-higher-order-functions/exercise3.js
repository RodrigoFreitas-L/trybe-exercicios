const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compare = (a, b) => {
//   if (a === b) {
//     return 1;
//   } if (b === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const answerChecker = (a, b, callback) => {
//   let counter = 0;
//   for (let i = 0; i < a.length; i += 1) {
//     const callbackReturn = callback(a[i], b[i]);
//     counter += callbackReturn;
//   }
//   return `Resultado final: ${counter} pontos`;
// };

// console.log(answerChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));

const checkerPoints = (gabarito, estudante) => { 
  if (gabarito === estudante) {
    return 1;
  } if (estudante === 'N.A') {
    return 0;
  } return -0.5;
}

const answerChecker = (gabarito, estudante, callbackCounter) => {
  let counter = 0;
  for (let i in gabarito) {
    const callback = callbackCounter(gabarito[i], estudante[i])
    counter += callback;
  }
  return `Result: ${counter} points`;
}

console.log(answerChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, checkerPoints));