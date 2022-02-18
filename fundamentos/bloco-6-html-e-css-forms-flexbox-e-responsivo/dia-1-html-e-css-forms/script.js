const query = document.querySelector.bind(document);
const create = document.createElement.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const sendButton = query('#send-button');
const clearButton = query('#clear-button');
const allInput = queryAll('input');
const textArea = queryAll('textarea');
const fullName = query('#full-name');
const email = query('#email');
const copyright = query('#copyright');

function fieldVerify() {
  if (fullName.value.length < 10 || fullName.value.length > 40) {
    alert('Dados Inválidos');
  } else if (email.value.length < 10 || email.value.length > 50) {
    alert('Dados Inválidos');
  } else if (!copyright.checked) {
    alert('O campo de direitos autorais de imagem é obrigatório')
  }  else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

function stopSending() {
  fieldVerify();
  sendButton.preventDefault();
}

function clearAll() {
  for (let i = 0; i < allInput.length; i += 1) {
    allInput[i].value = null;
  }
}


sendButton.addEventListener('click', stopSending);
clearButton.addEventListener('click', clearAll);