const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');

const path = require ('path');
const controller = require('../controller/usersController');

//video 1h
const { body } = require('express-validator');

const validations = [
body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
body('email')
.notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
.isEmail().withMessage('Debes escribir un formato de correo valido'),
body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
body('country').notEmpty().withMessage('Tienes que escribir un pais'),
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



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/img/users'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage });


routerUsers.get('/users/login',controller.login);

routerUsers.get('/users/register', controller.register );
routerUsers.post('/users/register', upload.single('avatar'), controller.saveUser );

routerUsers.get('/users/profile/:id', controller.profile);


module.exports = routerUsers;



