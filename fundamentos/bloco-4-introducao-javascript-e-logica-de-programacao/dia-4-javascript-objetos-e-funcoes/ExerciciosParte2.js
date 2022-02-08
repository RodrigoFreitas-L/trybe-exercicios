// let word = 'word';

// function wordReverser(word) {
//   return word.split('').reverse().join('');
// };

// function palindromeVerify(word) {
//   if (word === wordReverser(word)) {
//     return true;
//   } return false;

//  };
//  console.log(palindromeVerify(word));

// let teste = [2, 3, 6, 7, 10, 1];

// function largerIndex(teste) {
//   let biggestIndex = 0;
//   for (let index in teste) {
//     if (teste[biggestIndex] < teste[index]) {
//       biggestIndex = index;
//     }
//   }
//   return biggestIndex;
// };

// console.log(largerIndex(teste));

// let teste = [2, 3, 6, 7, 10, -3, -25];

// function lowestIndex(teste) {
//   let lowerIndex = 0;
//   for (let index in teste) {
//     if (teste[lowerIndex] > teste[index]) {
//       lowerIndex = index;
//     }
//   }
//   return lowerIndex;
// };

// console.log(lowestIndex(teste));

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function biggerNameVerify(nomes) {
//   biggestName = nomes[0];
//   for (let index in nomes) {
//     if (nomes[index].length > biggestName.length) {
//       biggestName = nomes[index];
//     }
//   }
//   return biggestName;
// };

// console.log(biggerNameVerify(nomes));

// let teste = [2, 3, 2, 5, 8, 2, 3];

// function moreRepeated(teste) {
//   let countRepeated = 0;
//   let countNumber = 0;
//   let indexNumberRepeated = 0;

//   for (let index in teste) {
//     let verifyNumber = teste[index];
//     for (let index2 in teste) {
//       if (verifyNumber == teste[index2]) {
//         countNumber += 1;
//       }
//     }
//     if (countNumber > countRepeated) {
//       countRepeated = countNumber;
//       indexNumberRepeated = index;
//     }
//     countNumber = 0;
//   }
//   return teste[indexNumberRepeated];

// }

// console.log(moreRepeated(teste));


// let n = 10;

// function sumNumbers(n) {
//   let sum = n;
//   for (let i = 0; i < n; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumNumbers(10));

// let word = 'joaofernando';
// let ending = 'nando';

// function endingVerify(word, ending) {
//   if (word.endsWith(ending)) {
//     return true;
//   } return false;

// };

// console.log(endingVerify(word, ending));

// let moradores = {
//   blocoUm: [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//   ],
//   blocoDois: [
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ],
// };

// console.log( '"O morador do bloco 2 de nome', moradores.blocoDois[1]['nome'], moradores.blocoDois[1]['sobrenome'], 'mora no', moradores.blocoDois[1]['andar'] + 'º andar,', 'apartamento',  moradores.blocoDois[1]['apartamento'] + '"');

// for (let index = 0; index < moradores.blocoUm.length; index += 1) {
//   console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
// }

// for (let index = 0; index < moradores.blocoDois.length; index += 1) {
//   console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
// }