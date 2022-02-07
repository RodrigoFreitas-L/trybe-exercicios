let base = 5;
let symbol = '*'; // simbolo que será usado
let line = ''; // a linha que será usada para os simbolos
let position = base;

for (let i = 0; i < base; i += 1) { // estrutura de repetição que usará o valor de "base" para o número de repetições;
  for (let i2 = 0; i2 <= base; i2 += 1) { // uma segunda estrutura que usará o valor de "base" para o número de colunas;
    if (i2 < position) { // condição para verificar se a 
      line += ' ';
    } else {
      line += symbol;
    }
  }
  console.log(line); // imprimindo o numero de linhas, baseando-se no número de iterações
  line = ''; // fazendo com que cada iteração, adicione um "symbol" a mais em cada linha.
  position -= 1;
}