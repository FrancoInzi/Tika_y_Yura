const bcryptjs = require('bcryptjs');
const express = require('express');
const path = require('path');
const db = require("../database/models");
const User = require('../database/models/user');
const modelUser = require('../database/models/Usermodel');
const { error } = require('console');
const {validationResult} = require('express-validator');

const userController = express();


const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

userController.use(express.static(publicFolderPath));


const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    profile: (req, res) => {
        const id = Number(req.params.id);
        for (let i = 0; i < User.length; i++) {
            if (User[i].id === id) {
                return res.render('users/profile.ejs', { user: User[i] })
            }
        }
    },
    processRegister: (req, res) => {

        const {
            nombreyapellido,
            nombreDeUsuario,
            email,
            FechaDeNacimiento,
            domicilio,
            password
        } = req.body;
        console.log(req.body)
        const resultValidation = validationResult(req);
        console.log(resultValidation.errors)
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        console.log(resultValidation)
        if (resultValidation.isEmpty()) {
            console.log('pasé')
            const userExist = modelUser.findByField('email', email)
            if (userExist) {
                res.send('El usuario ya se encuentra registrado');
            } else {
                const userToCreate = {
                    ...req.body,
                    password: bcryptjs.hashSync(password, 10),
                    avatar: req.file.filename
                }
                modelUser.create(userToCreate);
                return res.send('ok, se guardo el usuario');
            }
        }else{
            res.render('users/register', {
                'error': resultValidation.array(),
                'prev':  req.body
            })
        }



    },


    postLogin: (req, res) => {
        const {
            email, 
            password
        }=req.body;

        const errors = validationResult(req);
        if(errors.isEmpty()){
            const userLogin = modelUser.findByField('email', email);
            if(userLogin){
                const passwd = bcryptjs.compareSync(password, userLogin.password)
                if(passwd){
                    req.session.userLogged = userLogin;
                    res.send('Bienvenido' + userLogin.email);
                }else{
                    return res.send('credenciales inválidas')
                }
            }
            res.send('mail inexistente')
        }else{
            res.render('users/login', {
                'errors': errors.array(),
                'prev':  req.body
            })
        }

    }
}


module.exports = controller;