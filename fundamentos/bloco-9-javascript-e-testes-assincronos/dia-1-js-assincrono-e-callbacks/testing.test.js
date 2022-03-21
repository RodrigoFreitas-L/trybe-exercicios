const { expect, it } = require("@jest/globals");

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

const uppercase = (str, callback) => {
  setTimeout(() => {
    if (typeof str !== 'string') {
      callback(new Error('Somente letras podem ser maíusculas'))
    } else { 
      callback(str.toUpperCase());
    }
  }, 500);
};

it(`uppercasing 'ayaya' to 'AYAYA'`, (done) => {
  uppercase('ayaya', (yey) => {
    try {
      expect(yey).toBe('AYAYA');
      done();
    } catch (err) {
      done(err);
    }
  });
});

it(`testing cases where numbers are the input`, (done) => {
  const expectedError = new Error('Somente letras podem ser maíusculas');
  uppercase(43346, (err) => {
    expect(err).toEqual(expectedError);
    done();
  })
});
