const User = require('../models/user-register');


exports.registerUser = async (name, email, password) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: name,
            email: email,
            password: password
        });
        user.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}