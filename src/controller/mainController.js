const express = require('express');
const path = require('path');


const mainController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);


mainController.use(express.static(publicFolderPath) );

const index = (req, res) =>{
    res.render('index')
}
const aboutus = (req, res) => {
    res.render('aboutus')
}

module.exports = {
    index,
    aboutus
    
}