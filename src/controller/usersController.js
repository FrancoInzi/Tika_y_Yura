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


const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    // profile: (req, res) => {
    //     db.Usuarios.findByPk(req.params.id)
    //     .then(function (users) { res.render('users/profile.ejs', { users }); })

    // },
    profile: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
        .then(function (users) { res.render('users/profile.ejs', { users }); })

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



    },


    postLogin: async(req,res)=>{
		try{
			
			const userToLogin= await db.Usuarios.findAll({where: {email:req.body.email}})     
		
		console.log(userToLogin)

		if(userToLogin){

			const passwordIsTrue = bcryptjs.compareSync(req.body.password,userToLogin[0].password);
			
			
			if(passwordIsTrue){
				delete userToLogin.password;
				req.session.userLogged=userToLogin;
				
				return res.redirect('users/profile' + req.params.id)
			}	
			return res.render('users/login.ejs',{
				errors:{
					email: {
						msg: 'Las credenciales son invalidas'
					}
				}
			})
		}
		return res.render('users/login.ejs',{
			errors:{
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		})
	}catch(error){
		console.log(error)
	}},
}


module.exports = controller;