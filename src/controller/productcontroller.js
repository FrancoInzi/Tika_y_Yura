const express = require('express');
const path = require('path');
const fs = require('fs');

const json = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf-8');
const products = JSON.parse(json)

const mainController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

productController.use(express.static(publicFolderPath));

const archivojson = fs.readFileSync('/products.json', 'utf-8');
const productos = JSON.parse( archivojson);

const controller = {

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

    },

    saveProduct: (req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
        //res.redirect();
    },

    editProduct: (req, res) => {
        let id = req.params.id;
        
        let productToEdit = productos[id];

module.exports = {
    
    productDetail,
    productCart,
    createProduct,
    editProduct,
   saveProduct,
    allProduct,
    getProductDetail
    
}

module.exports = controller;