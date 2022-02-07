let maiorNumeroPrimo = 0;
let primos;

for (let i = 0; i <= 50; i += 1) {
  let primos = true;
  for (let i2 = 2; i2 < i; i2 += 1) {
    if (i % i2 == 0) {
      primos = false;

    }
  }

  if (primos) {
    maiorNumeroPrimo = i;

  }
}

console.log(maiorNumeroPrimo);