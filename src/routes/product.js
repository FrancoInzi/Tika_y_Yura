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
routerProduct.get('/product/allproducts',  productController.allProduct);

//Formulario de creacion de producto
routerProduct.get('/product/createproduct',  productController.reateProduct);

//Detalle de un producto particular
routerProduct.get('/product/productdetail/:id',  productController.productDetail);

//Acción de creación (a donde se envía el formulario)
routerProduct.post('/product/createproduct', upload.single("imagenProducto"), productController.saveProduct );

//Formulario de edición de productos
routerProduct.get ('/product/productedit/:id/', productController.editProduct);

//accion de edicion 
//routerProduct.put('/product/editproduct/:id',  productController.editProduct);

routerProduct.put('/product/editproduct/:id', function(req, res){
    res.send("yendingggggggg");
}),

//Acción de borrado
routerProduct.delete('/product/productdetail/:id', productController.deleteProduct);

routerProduct.get('/product/productcart',  productController.productCart);


module.exports= routerProduct;
