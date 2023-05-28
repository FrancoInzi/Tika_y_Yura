const express = require('express');

const productControllerAPI = require('../controller/productControllerAPI');

const routerProductAPI = express.Router();


routerProductAPI.get('/api/products/', productControllerAPI.listAll);

routerProductAPI.get('/api/product/detail/:id', productControllerAPI.detail);

module.exports=routerProductAPI;