const express = require('express');
const path = require('path');

const mainControler = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

mainControler.use(express.static(publicFolderPath) );

const index = (req,res) => {
    res.render('index.ejs');
}
const aboutus = (req,res) => {
    res.render('aboutus.ejs');
}



module.exports = {
    index,
    aboutus,
       
    
}