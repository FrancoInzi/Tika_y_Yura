
const express = require('express');
const { productDetail, productCart, createProduct, editProduct, allProduct} = require('../controller/productcontroller')

const routerProduct = express.Router();
//Listado de productos
routerProduct.get('/product/allproducts',  allProduct);

routerProduct.get('/product/productdetail/:id',  productDetail);

routerProduct.get('/product/productcart',  productCart);

//Acción de creación (a donde se envía el formulario)
routerProduct.get('/product/createproduct',  createProduct);
//routerProduct.post('/product/createproduct', savnpm sarteProduct);

//Formulario de edición de productos
routerProduct.get ('/products/:id/edit', );
//accion de edicion 
routerProduct.put('/product/editproduct',  editProduct);

//Acción de borrado
routerProduct.delete('/products/:id', );




module.exports= routerProduct;
