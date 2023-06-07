
const express = require('express');
const routerMain = express.Router();
const {index, search, aboutus} = require('../controller/mainController');


routerMain.get('/', index);

//routerMain.get('/product/productdetail/:id', search);

routerMain.get('/aboutus', aboutus);


module.exports=routerMain;
