let estado ='aprovada';

switch (estado) {
  case 'aprovada':
    console.log('Você foi aprovada');
    break;

  case 'lista':
    console.log('Você está em nossa lista de espera');
    break;

  case 'reprovada':
    console.log('Você foi reprovada');
    break;

  default: 
    console.log('Não se aplica');
    break;
    
}