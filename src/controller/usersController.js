//hash
const bcryptjs = require('bcryptjs');
const express = require('express');
const path = require('path');
const db = require("../database/models/");
const User = require('../database/models/user');
const modelUser = require('../database/Usermodel');
const { error } = require('console');
const { validationResult } = require('express-validator');

const userController = express();


const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

userController.use(express.static(publicFolderPath));

//video 1h

const controller = {
    register: (req, res) => {
        return res.render('/register.ejs');
    },
    processRegister: async (req, res) => {

        const {
            first_name,
            last_name,
            email,
            domicilio,
            password
        } = req.body;
        console.log(req.body)
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('/register.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        console.log(resultValidation)
        if (resultValidation.isEmpty()) {
            console.log('pasé')
            const userExist = await db.Usuarios.findOne({
                where: {
                    email
                }
            })
            if (userExist) {
                res.send('El usuario ya se encuentra registrado');
            } else {
                const domicilio = await db.Domicilio.create({
                    calle: req.body.calle,
                    altura: req.body.altura,
                    localidad_id: Number(req.body.domicilio)
                })
                const userToCreate = {
                    first_name,
                    last_name,
                    email,
                    domicilio_id: domicilio.id,
                    password: bcryptjs.hashSync(password, 10),
                    Img: req.file.filename
                }
                const user = await db.Usuarios.create(userToCreate);
                return res.redirect('/')
            }

        } else {
            res.render('users/register', {
                'error': resultValidation.array(),
                'prev': req.body
            })
        }



    User.create(userToCreate);
        return res.send('ok, se guardo el usuario');
    },


    postLogin: (req, res) => {
        const {
            email,
            password
        } = req.body;

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const userLogin = modelUser.findByField('email', email);
            if (userLogin) {
                const passwd = bcryptjs.compareSync(password, userLogin.password)
                if (passwd) {
                    req.session.userLogged = userLogin;
                    res.send('Bienvenido' + userLogin.email);
                } else {
                    return res.send('credenciales inválidas')
                }
            }
            res.send('mail inexistente')
        } else {
            res.render('users/login', {
                'errors': errors.array(),
                'prev': req.body
            })
        }
    },
    saveUser: (req, res) => {
    //lo que sigue es del video de validacion multer clase 29
    //     let imageFile = req.file;
    //     if(imageFile !== undefined){
    //         //Se guardara la informacion de la persona en nuestra db.
    //         //imageFile.filename nos dara el nombre de la imagen que se almaceno en nuestro servidor.
    //     }
    // return res.send('No enviste ninguna imagen');
        // return res.send({
        //     body: req.body,
        //     file: req.file
        // });
    },
}


module.exports = controller;