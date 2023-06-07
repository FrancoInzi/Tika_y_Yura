const express = require('express');
const path = require('path');
const db = require("../database/models");
const { Op } = require("sequelize");


const mainController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);


mainController.use(express.static(publicFolderPath) );

const index = (req, res) =>{
    res.render('index')
}

// const search = (req, res) =>{
//     db.products.findAll(
//         {include:[
//             {association: 'Productos'}, 
//         ],
//         where:{name : {[Op.like]: '%' + req.query.search + '%'}} , 
//     })

//      .then(products=>{
//        res.render('product/productdetail.ejs', { products })
//      } )      
//     .catch(error=>console.log(error));
// }

const aboutus = (req, res) => {
    res.render('aboutus')
}

module.exports = {
    index,
    //search,
    aboutus
    
}