// // const testingScope = (escopo) => {
// //   if (escopo === true) {
// //     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
// //     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
// //     console.log(ifScope);
// //   } else {
// //     let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
// //     console.log(elseScope);
// //   }
// // }

// // testingScope(true);

// // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // // Seu código aqui.

// // const sortOddsAndEvens = () => {
// //   oddsAndEvens[0] = 2
// //   oddsAndEvens[1] = 3
// //   oddsAndEvens[2] = 4
// //   oddsAndEvens[3] = 7
// //   oddsAndEvens[4] = 10
// //   oddsAndEvens[5] = 13;

// //   return oddsAndEvens;
// // }

// // const sorted = sortOddsAndEvens();

// // console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// // const sortEmAll = oddsAndEvens.sort((a, b) => a - b); // https://www.w3schools.com/js/js_array_sort.asp

// // console.log(`Os números ${sortEmAll} se encontram ordenados de forma crescente!`);

// const factorial = (number) => {
//   if (number === 0 | number === 1)
//   return 1;
//   for (let i = number - 1; i >= 1; i -= 1) {
//     number *= i;
//   }
//   return number;
// }

// console.log(factorial(10));;

// // Recursiva

// const factorial2 = (number) => number > 1 ? number * factorial2(number -1) : 1;

// console.log(factorial(10));

// const longestWord = text => {
//   let array = text.split(' ');
//   let length = 0;
//   let result = '';

//   for (const word of array) {
//     if (word.length > length) {
//       length = word.length;
//       result = word;
//     }
//   }
//   return result;
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// // longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// const query = document.querySelector.bind(document);

// const btn = query('#ayaya-btn');

// let clickCount = 0;

// btn.addEventListener('click', () => query('#counter').innerHTML = clickCount += 1);

// const xString = 'Tryber x aqui!';
// const skill1 = 'JavaScript';
// const skill2 = 'HTML';
// const skill3 = 'GitHub';
// const skill4 = 'CSS';
// const skill5 = 'React';

// const replaceX = (string) => xString.replace('x', string);

// console.log(`${replaceX('Rodrigo')} Minhas cinco principais habilidades são: ${skill1}, ${skill2}, ${skill3}, ${skill4} e ${skill5} #goTrybe`);