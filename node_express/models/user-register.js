const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        min: 6, 
        max: 256
    },
    email : {
        type: String,
        required: true,
        min: 6, 
        max: 50
    },
    password : {
        type: String,
        required: true,
        min: 6, 
        max: 256
    },
});

module.exports = mongoose.model('UserRegister', userRegisterSchema);