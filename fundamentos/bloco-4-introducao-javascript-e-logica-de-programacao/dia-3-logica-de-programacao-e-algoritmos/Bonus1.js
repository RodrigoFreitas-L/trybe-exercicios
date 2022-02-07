let num = 5;
let asterisco = '*';
let linha = '';

for (let i = 0; i < num; i += 1) { // fazendo a repetição para colocar o valor de NUM em asteriscos, dentro de linha;
  linha += asterisco;

};

for (let i2 = 0; i2 < num; i2 += 1) { // já que linha está pronto, irá fazer o log conforme o valor de NUM;
  console.log(linha);

};