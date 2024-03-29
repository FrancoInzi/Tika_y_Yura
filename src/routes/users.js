const express = require('express');
const {validationResult} = require('express-validator');
const routerUsers = express.Router();


const path = require ('path');
const controller = require('../controller/usersController');



const { body } = require('express-validator');
const fileUpload = require('../midelwares/multerMidelwares');

const validations = [
body('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
body('last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un formato de correo valido'),
body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
body('domicilio').notEmpty().withMessage('Tienes que selecionar un provincias'),
body('avatar').custom((value, {req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
        throw new Error('Tienes que subir una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }
    return true;
})
]

routerUsers.get('/users/login', controller.login);
routerUsers.post('/users/login', controller.postLogin );

routerUsers.get('/users/register', controller.register );
routerUsers.post('/users/register', fileUpload.single('avatar'), validations, controller.processRegister );

routerUsers.get('/users/edituser/:id', controller.edit);
routerUsers.put('/users/edituser/:id', fileUpload.single('avatar'), validations, controller.editpost);
routerUsers.delete('/users/edituser/:id', controller.deleteuser);

routerUsers.get('/users/profile/:id', controller.profile);


module.exports = routerUsers;



