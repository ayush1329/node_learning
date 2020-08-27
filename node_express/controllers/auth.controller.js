
const authService = require('../services/auth.service');
const { registerValidation, loginValidation } = require('../auth-guard/validation');
const User = require('../models/user-register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(401).json({
                message: error.details[0].message,
                status: false
            });
        }
        const emailIsExist = await User.findOne({ email: req.body.email });
        if (emailIsExist) {
            return res.status(401).json({
                message: 'Email already exist',
                status: false
            });
        }


        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        let registerUser = await authService.registerUser(req.body.name, req.body.email, hashPassword);
        if (registerUser) {
            return res.status(200).json({
                result: registerUser,
                status: true
            })
        }

    } catch (err) {
        return res.status(400).json({
            result: 'Bad Request',
            status: false
        });
    }
}


exports.login = async (req, res) => {
    try {
        const { error } = loginValidation(req.body);
        if (error) {
            return res.status(401).json({
                message: error.details[0].message,
                status: false
            });
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                message: 'Email not found',
                status: false
            });
        }
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(401).json({
                result: 'Password not correct',
                status: true
            })
        }
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        return res.status(200).json({
            result: user,
            token: token,
            status: true
        })
    } catch (err) {
        return res.status(400).json({
            result: 'Bad Request',
            status: false
        });
    }
}