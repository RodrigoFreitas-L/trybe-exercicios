import { expect } from 'chai';
import numVerify from './funcao1.js';
import changeFile from './funcao2.js';
import sinon from 'sinon';
import fs from 'fs/promises';

describe('Verifica funcionamento da função', () => {
  it('Se um número é positivo', () => {
    const result = numVerify(2);
    expect(result).to.be.equal('positivo');
  });

  it('Se um número é negativo', () => {
    const result = numVerify(-1);
    expect(result).to.be.equal('negativo');
  });

  it('Se um número é neutro(0)', () => {
    const result = numVerify(0);
    expect(result).to.be.equal('neutro');
  });

  it('Se o parâmetro não for um número', () => {
    const result = numVerify('3rad');
    expect(result).to.be.equal('somente números são válidos!');
  });
});

describe('Função que escreverá conteúdo em um arquivo específico', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').resolves();
  });

  after(() => {
    fs.writeFile.restore();
  })

  const FRASE_DO_DIA = 'estou com sono';
  it('Testa se a função escreveu "estou com sono", no arquivo "soninho.txt" e seu retorno é um "ok"', () => {
    const result = changeFile('soninho.txt', FRASE_DO_DIA);
    expect(result).to.be.equal('ok');
  });

  it('Testa se o retorno da função é uma string', () => {
    const result = changeFile('soninho.txt', FRASE_DO_DIA);
    expect(result).to.be.a('string');
  });
});