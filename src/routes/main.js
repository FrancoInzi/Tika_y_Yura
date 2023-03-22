
const express = require('express');
const {index, aboutus, } = require('../controler/mainController')

const routerMain = express.Router();


routerMain.get('/', index);

routerMain.get('/aboutus', aboutus);




module.exports=routerMain;
