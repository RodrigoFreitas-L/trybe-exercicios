let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 > 0) { // verificando se há resto.
    impares += 1;
  }
  else {
    console.log('não há valor ímpar');
  }

}
console.log(impares);