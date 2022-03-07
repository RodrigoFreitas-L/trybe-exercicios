const elementID = document.getElementById.bind(document);

function verifyIs(value1, value2) {
  const result = parseInt(value1) + parseInt(value2);
  if (value1 === '' || value2 === '') {
    throw new Error('Faltou um número :)');
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Somente números são aceitos :)')
  } else {
    elementID('result').innerHTML = `Resultado: ${result}`;
  }
};

function sum() {
  try {
    const value1 = elementID('value1').value;
    const value2 = elementID('value2').value;
    
    verifyIs(value1, value2);
      
  } catch (e) {
    elementID('result').innerHTML = (e.message);

  } finally {
    elementID('value1').value = '';
    elementID('value2').value = '';

  }
};

window.onload = () => {
  const button = elementID('button');
  button.addEventListener('click', sum);
}
