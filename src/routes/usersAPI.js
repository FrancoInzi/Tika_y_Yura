const express = require('express');

const usersControllerAPI = require('../controller/usersControllerAPI');

const routerUsersAPI = express.Router();


routerUsersAPI.get('/api/users/', usersControllerAPI.listAll);

routerUsersAPI.get('/api/users/detail/:id', usersControllerAPI.detail);

routerUsersAPI.get('/api/users/lastuser', usersControllerAPI.lastUser);

module.exports= routerUsersAPI;