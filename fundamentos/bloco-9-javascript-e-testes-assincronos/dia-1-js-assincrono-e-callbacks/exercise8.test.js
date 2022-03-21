// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callback(err, result) {
      expect(err).toEqual(expectedError);
      done();
    }

    getPokemonDetails('Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toEqual(expectedString);
      done();
    }
    getPokemonDetails('Charmander', callback);
  });
});