import numeroAleatorio from './service';

describe('Testing function return', () => {
  it('tests if the function is called', () => {
    numeroAleatorio();
    expect(numeroAleatorio()).toHaveBeenCalled();
  })
});
