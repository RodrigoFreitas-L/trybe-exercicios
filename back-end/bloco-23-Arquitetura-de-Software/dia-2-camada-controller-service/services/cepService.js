const cepModel = require('../models/cepModel');

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const getCep = async (cep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  };

  const getCep = await cepModel.getCep(cep);

  if(!getCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return getCep;
};

const postCep = async (cep, logradouro, bairro, localidade, uf) => {
  const exists = await cepModel.getCep(cep);

  if(exists) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já cadastrado',
      },
    };
  };

  return cepModel.create(cep, logradouro, bairro, localidade, uf);
};

module.exports = {
  getCep,
  postCep,
}