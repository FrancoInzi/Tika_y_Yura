const express = require('express');
const path = require('path');

const mainControler = express();

const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

mainControler.use(express.static(publicFolderPath) );

const index = (req,res) => {
    res.render('index.ejs');
}
const login = (req,res) => {
    res.render('users/login.ejs');
}
const register = (req,res) => {
    res.render('users/register.ejs');
}
const profile = (req,res) => {
    res.render('users/profile.ejs');
}
const productDetail = (req,res) => {
    res.render('product/productDetail.ejs');
}
const productCart = (req,res) => {
    res.render('product/productCart.ejs');
}
const createProduct = (req,res) => {
    res.render('product/createProduct.ejs');
}

module.exports = {
    index,
    login,
    register,
    profile,
    productDetail,
    productCart,
    createProduct,
    
}