
const express = require('express');
const {index, login, register, productDetail, productCart, createProduct, profile} = require('../controler/mainControler')

const routerMain = express.Router();


routerMain.get('/', index);

routerMain.get('/users/login', login );

routerMain.get('/users/register', register );

routerMain.get('/users/profile', profile );

routerMain.get('/product/productdetail',  productDetail);

routerMain.get('/product/productcart',  productCart);

routerMain.get('/product/createproduct',  createProduct);


module.exports=routerMain;
