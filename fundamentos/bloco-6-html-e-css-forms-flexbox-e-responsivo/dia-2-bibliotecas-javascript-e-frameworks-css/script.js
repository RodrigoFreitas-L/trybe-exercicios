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
const tripDate = query('#datepicker');
// tripDate.DatePickerX.init();

const picker = new Pikaday({
  field: tripDate,
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

// function fieldVerify() {
//   if (fullName.value.length < 10 || fullName.value.length > 40) {
//     alert('Dados Inválidos');
//   } else if (email.value.length < 10 || email.value.length > 50) {
//     alert('Dados Inválidos');
//   } else if (!copyright.checked) {
//     alert('O campo de direitos autorais de imagem é obrigatório')
//   }  else {
//     alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//   }
// }

// function stopSending() {
//   fieldVerify();
//   sendButton.preventDefault();
// }

window.onload = () => {

const validation = new JustValidate('#form');
const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validation
  .addField('#full-name', [
    {
      rule: 'required',
      errorMessage: 'O campo "Nome" é obrigatório.',
    },
    {
      rule: 'minLength',
      value: 5,
      errorMessage: 'Nome muito curto',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Nome muito longo',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email necessário',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido',
    },
  ])
  .addField('#copyright', [
    {
      rule: 'required',
      errorMessage: 'Obrigatório.',
    },
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
      errorMessage: 'A data da viagem é obrigatória.',
    },
  ])
  .addRequiredGroup(
    '#lugar',
    'Selecione um destino'
  );
}