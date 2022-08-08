/*
Crie uma função que receba três parâmetros e retorna uma Promise.
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

*/

const sumAndMultiply = (num1, num2, num3) => {
    
  const promise = new Promise((res, rej) => {
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) rej(new Error('Informe apenas números'));

    const result = (num1 + num2 ) * num3;
    if(result < 50) rej(new Error('Valor muito baixo'))
    res(`your numbers: ${num1}-${num2}-${num3} and your result: ${result}`);
  });

  return promise;
}

module.exports = { sumAndMultiply };