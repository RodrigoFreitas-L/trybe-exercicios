const numVerify = (num) => {
  if(isNaN(num)) {
    return 'somente números são válidos!';
  }
  if(num > 0) {
    return 'positivo';
  }
  if(num < 0) {
    return 'negativo';
  }
  return 'neutro';
};

export default numVerify;
