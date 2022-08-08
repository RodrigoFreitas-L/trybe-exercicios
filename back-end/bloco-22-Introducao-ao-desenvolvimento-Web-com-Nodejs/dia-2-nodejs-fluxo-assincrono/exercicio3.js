/*
Reescreva o código do exercício anterior para que utilize async/await.
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
*/
const { sumAndMultiply } = require('./exercicio1');

const randSumAndMultiply = async () => {
	const randomNumber1 = Math.floor(Math.random() * 100 + 1);
	const randomNumber2 = Math.floor(Math.random() * 100 + 1);
	const randomNumber3 = Math.floor(Math.random() * 100 + 1);
	try {
    const result = await sumAndMultiply(randomNumber1, randomNumber2, randomNumber3);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

randSumAndMultiply();