let salario = 3500;
let liquotaINSS;
let liquotaIR;

if (salario <= 1556.94) {
  liquotaINSS = (salario*0.08); // INSS 8%
  salario = salario - liquotaINSS

}
else if (salario >= 1556.95 && salario <= 2594.92) {
  liquotaINSS = (salario*0.09); // INSS 9%
  salario = salario - liquotaINSS

}
else if (salario >= 2594.93 && salario <= 5189.82 ) {
  liquotaINSS = (salario*0.11); // INSS 11%
  salario = salario - liquotaINSS

}
else if (salario >= 5189.82) {
  liquotaINSS = salario - 570.88; // INSS cota máxima
  salario = salario - liquotaINSS

};

if (salario <= 1903.98) {
  liquotaIR = 0; // isenção IR
  salario = salario - liquotaIR

}
else if (salario >= 1903.99 && salario <=2826.65) {
  liquotaIR = (salario*0.075) - 142.80; // IR 7.5% - 142.80
  salario = salario - liquotaIR

}
else if (salario >= 2826.66 && salario <= 3751.05) {
  liquotaIR = (salario*0.15) - 354.80; // IR 15% - 354.80
  salario = salario - liquotaIR

}
else if (salario >= 3751.06 && salario <= 4664.68) {
  liquotaIR = (salario*0.225) - 636.13; // IR 22.5% - 636.13
  salario = salario - liquotaIR

}
else if (salario > 4664.68) {
  liquotaIR = (salario*0.275) - 868.36; // IR 27.5% - 868.36
  salario = salario - liquotaIR

};

console.log(salario);