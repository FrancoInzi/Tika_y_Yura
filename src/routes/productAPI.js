const express = require('express');

const productControllerAPI = require('../controller/productControllerAPI');

const routerProductAPI = express.Router();


routerProductAPI.get('/api/product/', productControllerAPI.listAll);

routerProductAPI.get('/api/product/detail/:id', productControllerAPI.detail);

routerProductAPI.get('/api/product/last-product', productControllerAPI.lastProduct);

module.exports=routerProductAPI;