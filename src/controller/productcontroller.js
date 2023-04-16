const express = require('express');
const path = require('path');
const fs = require('fs');
const productController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

productController.use(express.static(publicFolderPath));

const archivojson = fs.readFileSync('/products.json', 'utf-8');
const productos = JSON.parse( archivojson);

const controller = {

    allProduct: (req, res) => {
        res.render('product/allproducts.ejs');
    },

    productCart: (req, res) => {
        res.render('product/productcart.ejs');
    },

    createProduct: (req, res) => {
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

        res.render("productToEdit", {productToEdit: productToEdit});

        //res.render('product/editproduct.ejs');
    },

    deleteProduct: (req, res) => {
        res.render('product/productdetail.ejs');
    }
}

module.exports = controller;