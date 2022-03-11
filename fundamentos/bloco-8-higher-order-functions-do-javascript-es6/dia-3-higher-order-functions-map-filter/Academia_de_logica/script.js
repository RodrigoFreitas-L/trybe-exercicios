/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
*/

const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

const nomesIdPar = techProducts.filter((element) => element.id % 2 === 0).map((element) => `${element.name}`)

// console.log(nomesIdPar);

const oddsAndEvens = techProducts.map((element) => element.id % 2 === 0 ? `O id de ${element.name} é par` : `O id de ${element.name} não é par`);

// console.log(oddsAndEvens);

// 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total

const takeMyMoney = (id, howMany) => {
  let price = 0;
  techProducts.forEach((produto) => {
    if (id === produto.id) {
      price = produto.price;
    }
  })
  return price * howMany;
};

// console.log(takeMyMoney(1, 5));