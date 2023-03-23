
const express = require('express');
const path = require('path');
const {index, aboutus} = require('../controller/mainController')


const routerMain = express.Router();


routerMain.get('/', index);

routerMain.get('/aboutus', aboutus);




module.exports=routerMain;
