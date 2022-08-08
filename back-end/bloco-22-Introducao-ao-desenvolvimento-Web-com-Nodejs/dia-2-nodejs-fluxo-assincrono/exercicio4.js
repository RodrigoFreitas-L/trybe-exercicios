/*
Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
*/
const fs = require('fs').promises;

// const readJsonFile = async () => {
//   try {
//     const promise = await fs.readFile('./simpsons.json');
//     const data = JSON.parse(promise);
//     const result = data.map(({id, name}) => `${id} - ${name}`);
//     result.forEach(string => {
//       console.log(string);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// readJsonFile();

// const returnById = async (simpsonId) => {
//     const promise = await fs.readFile('./simpsons.json');
//     const data = JSON.parse(promise);
//     const result = data.find(({id}) => Number(id) === simpsonId);
//     if (!result) {
//       throw new Error('Id não encontrado!');
//     }
//     return result;
// }

// const main = async () => {
//   const getById = await returnById(2);
//   console.log(getById);
// };

// main();

// const removingSomeIds = async () => {
//   const promise = await fs.readFile('./simpsons.json');
//   const data = JSON.parse(promise);
//   const result = data.filter(({id}) => Number(id) !== 10 && Number(id) !== 6);
//   await fs.writeFile('./new-simpsons.txt', JSON.stringify(result));
// }

// const main = () => {
//   removingSomeIds();
// }

// main();

// const newSimpsonsFamily = async () => {
//   const promise = await fs.readFile('./simpsons.json');
//   const data = JSON.parse(promise);
//   const ids = [1, 2, 3, 4];
//   const result = data.filter(({id}) => ids.includes(Number(id)));
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
// }

// const main = () => {
//   newSimpsonsFamily();
// };

// main();

// const addToSimpsonsFamily = async () => {
//   const promise = await fs.readFile('./simpsonFamily.json', 'utf-8');
//   const data = JSON.parse(promise);
//   // const secondPromise = await fs.readFile('./simpsons.json', 'utf-8');
//   // const secondData = JSON.parse(secondPromise);
//   // const filterSecondData = secondData.filter(({name}) => name === 'Nelson Muntz');
//   // data.push(filterSecondData);
//   // await fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
//   data.push({id: 8, name: 'Nelson Muntz'});
//   fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
// }

// const main = () => {
//   addToSimpsonsFamily();
// };

// main();

const removeNelson = async () => {
  const promise = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const data = JSON.parse(promise);
  const removingNelson = data.filter(({name}) => !name.includes('Nelson'));
  const addingMaggie = [ ...removingNelson, { id: '15', name: 'Maggie Simpson' } ];
  fs.writeFile('./simpsonFamily.json', JSON.stringify(addingMaggie));
}

const main = () => {
  removeNelson();
}

main();