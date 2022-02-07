let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

// console.log(info);

// for (let key in info) {
//   console.log(key);
// };

// for (let key in info) {
//   console.log(info[key]);
// };

let secondCharacter = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info && secondCharacter) {
  if (key === 'recorrente' && info[key] == 'Sim' && secondCharacter[key] == 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + secondCharacter[key]);
  }
}