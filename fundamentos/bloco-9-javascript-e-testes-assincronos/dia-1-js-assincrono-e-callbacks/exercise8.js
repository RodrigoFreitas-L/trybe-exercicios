const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(pokename, callback) {
  setTimeout(() => {
    const pokemon = pokemons.find(({ name }) => name === pokename);
    if (pokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);

  }, 200);
}

// getPokemonDetails('Charmanderr', (error, message) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(message);
//     }
//   }
// );

module.exports = {
  getPokemonDetails,
};