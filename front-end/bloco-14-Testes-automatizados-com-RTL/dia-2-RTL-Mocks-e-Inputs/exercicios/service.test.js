const service = require('./service');

describe('Testing function return', () => {
  it('tests if the function is called', () => {
    service.numeroAleatorio = jest.fn().mockReturnValue(10);

    expect(service.numeroAleatorio()).toBe(10);
    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);

    service.numeroAleatorio.mockRestore();
  });

  it('changing the function and testing the return', () => {
    service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.numeroAleatorio(10, 5)).toBe(2);
    expect(service.numeroAleatorio).toHaveBeenCalled();
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numeroAleatorio).toHaveBeenCalledWith(10, 5)

    service.numeroAleatorio.mockRestore();
  });

  it('changes the function to receive 3 parameters and return their multiplication', () => {
    service.numeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.numeroAleatorio(2, 2, 2)).toBe(8);
    expect(service.numeroAleatorio(5, 5, 5)).toBe(125);

    service.numeroAleatorio.mockRestore();

    service.numeroAleatorio = jest.fn().mockImplementation((a) => a * 2);

    expect(service.numeroAleatorio(2)).toBe(4);
    expect(service.numeroAleatorio(4)).not.toBe(9);

    service.numeroAleatorio.mockRestore();
  });

  it('changing functions', () => {
    toUpperCase = jest.spyOn(service, 'toUpperCase').mockImplementation((str) => str.toLowerCase());
    firstLetter = jest.spyOn(service, 'firstLetter').mockImplementation((str) => str.slice(-1));
    concatStrings = jest.spyOn(service, 'concatStrings').mockImplementation((str1, str2, str3) => str1.concat(str2.concat(str3)));

    expect(toUpperCase('AYAYA')).toBe('ayaya');
    expect(firstLetter('abcd')).toBe('d');
    expect(concatStrings('a', 'b', 'c')).toBe('abc');

    service.toUpperCase.mockRestore();

    expect(service.toUpperCase('ayaya')).toBe('AYAYA');
  });
});

describe('testing API requests', () => {
  service.API_REQUEST = jest.fn();
  afterEach(service.API_REQUEST.mockReset);

  it('checks the request in case the promisse is resolved', async () => {
    service.API_REQUEST.mockResolvedValue('request sucess');

    service.API_REQUEST();
    expect(service.API_REQUEST).toHaveBeenCalled();
    expect(service.API_REQUEST).toHaveBeenCalledTimes(1);
    await expect(service.API_REQUEST()).resolves.toBe('request sucess');
    expect(service.API_REQUEST).toHaveBeenCalledTimes(2);
  });

  it('checks the request in case the promisse is rejected', async () => {
    service.API_REQUEST.mockRejectedValue('request failed');

    expect(service.API_REQUEST).toHaveBeenCalledTimes(0);
    await expect(service.API_REQUEST()).rejects.toMatch('request failed');
    expect(service.API_REQUEST).toHaveBeenCalledTimes(1);
  })
});

