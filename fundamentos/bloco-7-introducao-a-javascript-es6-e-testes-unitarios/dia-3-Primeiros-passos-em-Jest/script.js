function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

function encode(array) {
 return array.replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5')
};

const decode = (array) => {
  return array.replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');
};

const techList = (techs, name) => {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  const sort = techs.sort();
  const bePushed = [];
  for (let key of sort) {
    bePushed.push({
      tech: key,
      name,
    });
  }
  return bePushed;
};

function reducer(string) {
  let numbersOnly = string.replace(/\D/g, '');
  numbersOnly = numbersOnly.split('');
  let sum = numbersOnly.reduce(function (prev, curr) {
    return prev + +curr;
  }, 0);
  return sum;
}

function hydrate(string) {
  let sum = reducer(string);
  if (sum === 1) {
    return `${sum} copo de água`;
  } return `${sum} copos de água`;
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};