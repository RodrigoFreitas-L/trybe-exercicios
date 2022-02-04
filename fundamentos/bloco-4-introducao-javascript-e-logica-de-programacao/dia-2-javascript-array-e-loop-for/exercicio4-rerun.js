let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let result;
// calcular a média aritmética dos valores em numbers
// reservar os valores de numbers em outra variavel
// contar o numero de elementos, dividi-los por este numero
for (let i = 0; i < numbers.length; i += 1) {
  result = (sum += numbers[i]) / numbers.length;
}
if (result > 20) {
  console.log('Valor maior que 20!');

}
else {
  console.log('Valor menor que 20!');
}