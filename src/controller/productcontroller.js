const express = require('express');
const path = require('path');
const fs = require('fs');

const { validationResult } = require('express-validator');
const db = require("../database/models/");
const json = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf-8');
const products = JSON.parse(json);

const productController = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

productController.use(express.static(publicFolderPath));

const allProducts = (req, res) => {
    db.Productos.findAll()
        .then(function (products) { res.render('product/allproducts.ejs', { 'allProducts': products }); })

}

const productDetail = async(req, res) => {
    await db.Productos.findByPk(req.params.id)
        .then(function (product) { res.render('product/productdetail.ejs', { product }); })



}

const productCart = (req, res) => {
    res.render('product/productCart.ejs');
}

const createProduct = (req, res) => {
    res.render('product/createproduct.ejs')
}

const saveProduct = async (req, res) => {
    let imageUpload;
        if(!req.file){
            imageUpload = 'logo vectorizado.jpg'
        } else {
            imageUpload = req.file.filename
        }
    console.log(imageUpload)
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        return res.render('product/createproduct.ejs', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }
    const product = await db.Productos.create({
        name: req.body.name,
        other_name: req.body.other_name,
        description: req.body.description,
        features: req.body.review,
        price: req.body.valor,
        image: imageUpload,
        maceta_id: Number(req.body.maceta)
    });
    return res.redirect('/product/productdetail/' + product.id)
}


const editProduct = (req, res) => {
    db.Productos.findByPk(req.params.id)
        .then(function (product) { res.render('product/editproduct.ejs', { product }); })
}


const updateProduct = async (req, res) => {    
    
    let imageUpload

        if(!req.file || !product.image){
            imageUpload = 'logo vectorizado.jpg'
        } else {
            imageUpload = req.file.filename
        }
    console.log(imageUpload)    
        
    const product = await db.Productos.update(
        {
            name: req.body.name,
            other_name: req.body.other_name,
            description: req.body.description,
            features: req.body.review,
            image: imageUpload,
            price: req.body.valor,        
    
        },{
        where: { id: req.params.id }
    });
    return res.redirect('/product/productdetail/' + req.params.id)
    //return res.send('el producto ha sido editado exitosamente')
}
const deleteProduct = async (req, res) => {
    db.Productos.destroy({
        include:[{association: 'Productos'}],
        where: {
            id: req.params.id
        }
    })
    return res.redirect('/product/allproducts')
};
  





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