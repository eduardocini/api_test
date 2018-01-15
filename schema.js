'use strict';

const Joi = require('joi');

const schemaFilmeValido = Joi.object({
  Title: Joi.string().required(),
  Year: Joi.number().integer().positive().required().options({ convert: false }),
  Language: Joi.string().valid('English').required(),
  Ratings: Joi.array().items(Joi.object({
    Source: Joi.string().required(),
    Value: Joi.string().required(),
  })),
  Type: Joi.string().valid(['movie', 'series', 'cartoon']).required(),
  Production: Joi.string().required(),
  Website: Joi.string().required(),
  Response: Joi.boolean().required(),
}).required();


module.exports = {
  schemaFilmeValido
}