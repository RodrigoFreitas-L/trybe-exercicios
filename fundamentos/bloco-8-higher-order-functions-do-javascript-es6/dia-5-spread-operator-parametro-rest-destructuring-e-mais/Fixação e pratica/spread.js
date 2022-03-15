// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melância', 'Abacate', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de leite', 'Leite condensado', 'Sorvete'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//Spread, por mais que signifique espalhar, ele nada mais que junta as coisas em outra, sem modificar as originais, sejam elas objetos ou arrays;