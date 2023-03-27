const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');
const path = ('path');
const { login, register, saveUser, profile } = require('../controller/usersController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'./public/img/users'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

routerUsers.get('/users/login', login );

routerUsers.get('/users/register', register );
routerUsers.post('/users/register', upload.single('avatar'), saveUser );

routerUsers.get('/users/profile/:id', profile);

module.exports = routerUsers;