//hash
const bcryptjs = require('bcryptjs');
const express = require('express');
const path = require('path');
const db = require("../database/models");
const User = require('../database/models/user');

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
    //nuevo 2h
let userToCreate = {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    avatar:  req.file.filename
}

        User.create(userToCreate);
        return res.send('ok, se guardo el usuario');
    },

    login: (req, res) => {
       res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    profile: (req,res) => {
        const id = Number(req.params.id);
        for (let i = 0; i < User.length; i++){
               if (User[i].id === id){ 
                  return res.render('users/profile.ejs', {user: User[i]})
               }
        }
    },
    saveUser: (req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
    },
}


module.exports = controller;