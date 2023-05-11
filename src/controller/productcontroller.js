const express = require('express');
const path = require('path');
const fs = require('fs');

const { validationResult } = require('express-validator');
const db = require("../database/models");
const json = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf-8');
const products = JSON.parse(json);

const productController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

productController.use(express.static(publicFolderPath) );

const allProduct = (req,res) => {
    res.render('product/allproducts.ejs');
}
const getProductDetail = (req, res) =>{
    const {id} = req.params;
    const product = product.find (e => e.id == id);
    if (product){
        res.send (product);
    } else{
        res.send ('notfound')
    }

}

const productDetail = (req,res) => {
    const id = Number(req.params.id);
    for (let i = 0; i < products.length; i++){
           if (products[i].id === id){ 
              return res.render('./product/productdetail.ejs', {product: products[i]})
           }
    }
    
}
//atrapar error!
const productCart = (req,res) => {
    res.render('product/productCart.ejs');
}

const createProduct = (req, res) => {
        res.render('product/createproduct.ejs')
}

const editProduct = (req,res) => {
    res.render('product/editproduct.ejs');
}

const saveProduct = (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        return res.render('product/createproduct.ejs', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }
    return res.send('ok, las validaciones se pasaron y no tienes errores');
}    




module.exports = {
    
    productDetail,
    productCart,
    createProduct,
    editProduct,
    saveProduct,
    allProduct,
    getProductDetail
    
}