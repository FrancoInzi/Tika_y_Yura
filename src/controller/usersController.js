const express = require('express');
const path = require('path');
const userController = express();


const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

userController.use(express.static(publicFolderPath));

//video 1h

const controller = {
    register: (req, res) => {
        return res.render('/register.ejs');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('/register.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        return res.send('ok, las validaciones se pasaron y no tienes errores');
    },

    login: (req, res) => {
        return res.render('users/login');
    },
    register: (req, res) => {
        return res.render('users/register');
    },
    profile: (req, res) => {
        return res.render('users/profile');
    },
    saveUser: (req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
    },
}


module.exports = controller;