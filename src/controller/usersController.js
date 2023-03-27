const express = require('express');
const path = require('path');
const userController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

userController.use(express.static(publicFolderPath) );

const login = (req, res) =>{
    res.render('users/login');
}
const register = (req, res) => {
    res.render('users/register');
}
const saveUser = (req, res) => {
    return res.send({
        body: req.body,
        file: req.file
    });
}

const profile = (req, res) => {
    res.render('users/profile');
}

module.exports = {
    login,
    register,
    saveUser,
    profile
}