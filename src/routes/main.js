
const express = require('express');
const {index, aboutus, login, register, productDetail, productCart, createProduct, profile} = require('../controller/mainController')


const routerMain = express.Router();


routerMain.get('/', index);

routerMain.get('/aboutus', aboutus);




module.exports=routerMain;
