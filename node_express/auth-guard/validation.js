const Joi = require('@hapi/joi');


const registerValidation = (data) => {
    const JoiSchema = Joi.object({ 
        name: Joi.string().min(5).max(30).required(), 
        email: Joi.string().email().min(5).max(50).email(),  
        password: Joi.string().min(6).required(),  
    }).options({ abortEarly: false }); 
  
    return JoiSchema.validate(data) 
}

const loginValidation = (data) => {
    const JoiSchema = Joi.object({ 
        email: Joi.string().email().min(5).max(50).email(),  
        password: Joi.string().min(6).required(),  
    }).options({ abortEarly: false }); 
  
    return JoiSchema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
