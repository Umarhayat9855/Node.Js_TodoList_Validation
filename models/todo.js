const Joi = require("@hapi/joi");
const mongoose = require('mongoose');
  const TODO = mongoose.model('TODO', new mongoose.Schema({
    task:String,
  }))

  function validateList(list) {
    const schema = Joi.object().keys({ 
      title : Joi.string().min(3).max(30).required(),
    })
    return Joi.validate(list,schema);
  }

  exports.TODO = TODO; 
  exports.validate = validateList;