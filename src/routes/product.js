const express = require('express');
const multer = require('multer');
const path = require ('path');
const { productDetail, productCart, createProduct, editProduct, allProduct, saveProduct, getProductDetail} = require('../controller/productcontroller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'./public/img/imgprod'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
}); 

const upload = multer({ storage });



const routerProduct = express.Router();
//Listado de productos
routerProduct.get('/product/allproducts',  allProduct);

routerProduct.get('/product/productdetail/:id',  productDetail);

routerProduct.get('/product/productcart',  productCart);

//Acción de creación (a donde se envía el formulario)
routerProduct.get('/product/createproduct',  createProduct);
//routerProduct.post('/product/createproduct', savnpm sarteProduct);
routerProduct.post('/product/createproduct', upload.single("imagenProducto"), saveProduct );
//Formulario de edición de productos
routerProduct.get ('/products/:id/edit', );
//accion de edicion 
routerProduct.put('/product/editproduct',  editProduct);

//Acción de borrado
routerProduct.delete('/products/:id', );




module.exports= routerProduct;
