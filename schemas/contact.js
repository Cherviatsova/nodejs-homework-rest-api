const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().alphanum().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

module.exports = contactSchema;
