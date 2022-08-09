const cepService = require('../services/cepService');
const Joi = require('joi');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepService.getCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
}

const postCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if(error) return next(error)
  
  const data = await cepService.postCep(cep, logradouro, bairro, localidade, uf);
  
  if(data.error) return next(data.error);

  return res.status(200).json(data);


};

module.exports = {
  getCep,
  postCep,
}