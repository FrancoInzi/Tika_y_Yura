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

const allProducts = (req,res) => {
    db.Productos.findAll()
        .then(function(products){ res.render('product/allproducts.ejs', {'allProducts':products});})    
        //res.send(products)
}

const productDetail = (req,res) => {
    db.Productos.findByPk(req.params.id)
        .then(function(product){res.render('product/productdetail.ejs', {product});})
    
    // const id = Number(req.params.id);
    // for (let i = 0; i < products.length; i++){
    //        if (products[i].id === id){ 
    //           return res.render('./product/productdetail.ejs', {product: products[i]})
    //        }
    // }
    
}
//atrapar error!
const productCart = (req,res) => {
    res.render('product/productCart.ejs');
}

const createProduct = (req, res) => {
        res.render('product/createproduct.ejs')
}

const saveProduct = async (req, res) => {
    const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('product/createproduct.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    const product= await db.Productos.create({
        name: req.body.name, 
        other_name: req.body.other_name,
        description: req.body.description, 
        features: req.body.review, 
        price: req.body.valor,
        image: req.body.imagenProducto,
        maceta_id: Number(req.body.maceta)
    }); 
    return res.redirect('/product/productdetail/' + product.id)
}

// const saveProduct = (req, res) => {
//     const resultValidation = validationResult(req);
//     if (resultValidation.errors.length > 0) {
//         return res.render('product/createproduct.ejs', {
//             errors: resultValidation.mapped(),
//             oldData: req.body
//         });
//     }
//     return res.send('ok, las validaciones se pasaron y no tienes errores');
// }    
const editProduct = (req,res) => {
    db.Productos.findByPk(req.params.id)
        .then(function(product){res.render('product/editproduct.ejs', {'allProducts':product});})
    
    // res.render('product/editproduct.ejs');
}
const updateProduct = (req, res) => {
    db.Productos.update({
        name: req.body.name, 
        other_name: req.body.other_name,
        description: req.body.description, 
        features: req.body.review, 
        price: req.body.valor,
        image: req.body.imagenProducto
    },{
        where:{id:1}
    }
    );
}
const deleteProduct = (req, res) => {
    db.Productos.destroy({
        name: req.body.name, 
        other_name: req.body.other_name,
        description: req.body.description, 
        features: req.body.review, 
        price: req.body.valor,
        image: req.body.imagenProducto
    });
}





module.exports = {
    
    productDetail,
    productCart,
    createProduct,
    editProduct,
    saveProduct,
    updateProduct,
    allProducts,
    deleteProduct
        
}