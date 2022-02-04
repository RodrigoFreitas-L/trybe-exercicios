let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let result;
// calcular a média aritmética dos valores em numbers
// reservar os valores de numbers em outra variavel
// contar o numero de elementos, dividi-los por este numero
for (let i = 0; i < numbers.length; i += 1) {
  result = (sum += numbers[i]) / numbers.length;
}
console.log(result);