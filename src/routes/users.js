const express = require('express');
const routerMain = express.Router();
const multer = require('multer');
const path = ('path')
const controller = require('../controller/usersController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../public/img/users'));
    },
    filename: (req, file, cb) => {
        const fileName = '${Date.now()}_img${path.extname(file.filename)}';
        cb(null, newFilename);
    }
});

const upload = multer({ storage })