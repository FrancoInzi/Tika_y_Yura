
const express = require('express');
const routerMain = express.Router();
const {index, aboutus} = require('../controller/mainController');





routerMain.get('/', index);

routerMain.get('/aboutus', aboutus);

module.exports=routerMain;
