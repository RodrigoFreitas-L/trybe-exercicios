const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script');

describe('test sum function', () => {
  it('verify sum 4, 5 return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('verify sum 0, 0 return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('verify sum 4, "5" throws error', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });
});

describe('test myRemove function', () => {
  it('verify arr removes 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  it('verify arr doesnt return initial arr', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
  it('verify arr continues equal', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('test myFizzBuzz', () => {
  it(`verify myFizzBuzz 60 returns 'fizzbuzz'`, () => {
    expect(myFizzBuzz(60)).toStrictEqual('fizzbuzz');
  });
  it(`verify myFizzBuzz 9 returns 'fizz'`, () => {
    expect(myFizzBuzz(9)).toStrictEqual('fizz');
  });
  it(`verify myFizzBuzz 25 returns 'buzz'`, () => {
    expect(myFizzBuzz(25)).toStrictEqual('buzz');
  });
  it(`verify myFizzBuzz 11 returns false`, () => {
    expect(myFizzBuzz(11)).toStrictEqual(11);
  });
});

describe('test encode', () => {
  it(`verify encode exists`, () => {
    expect(typeof encode).toBe('function');
  });
  it(`verify aeiou returns 3 ch1ll2ng2 y45`, () => {
    expect(encode('i challenge you')).toBe('3 ch1ll2ng2 y45');
  });
  it(`verify strings has the same length`, () => {
    expect(encode('aeiou')).toHaveLength(5);
  })
});

describe('test decode', () => {
  it(`verify decode exists`, () => {
    expect(typeof decode).toBe('function');
  });
  it(`verify 12345 returns aeiou`, () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it(`verify strings has the same length`, () => {
    expect(decode('12345')).toHaveLength(5);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
