const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');
const path = require('path');
const { login, register, saveUser, profile } = require('../controller/usersController');


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

//Formulario de Login
routerUsers.get('/users/login', login );

//Formulario de Registro
routerUsers.get('/users/register', register );

//Proceso de Registro o Guardado de Registro
routerUsers.post('/users/register', upload.single('avatar'), saveUser );

//Perfil de Usuario
routerUsers.get('/users/profile/:id', profile);

module.exports = routerUsers;