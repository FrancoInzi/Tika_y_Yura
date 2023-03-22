const express = require('express');
const path = require('path');

const mainController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

mainController.use(express.static(publicFolderPath) );

const allProduct = (req,res) => {
    res.render('product/productDetail.ejs');
}

const productDetail = (req,res) => {
    res.render('product/productDetail.ejs');
}
const productCart = (req,res) => {
    res.render('product/productCart.ejs');
}
const createProduct = (req, res) => {
        res.render('product/createproduct.ejs')
    },
const saveProduct = (req, res) => {
        res.send(req.body){

        }
    }

const editProduct = (req,res) => {
    res.render('product/editproduct.ejs');
}

module.exports = {
    
    productDetail,
    productCart,
    createProduct,
    editProduct,
    saveProduct,
    allProduct
    
}