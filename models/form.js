const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('@hapi/joi');

// const Form = new Schema({
//   name: Joi.string().min(3).required(),
//   email: Joi.string().email().required(),
//   phone_number: Joi.number().min(10).max(10).required(),
// });
const Form=(formData) =>{
  const Schema = {
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  };
  return Joi.validate(formData, Schema);
}
module.exports = mongoose.model('Form', Form);
