const express = require('express');
const multer = require('multer');
const path = require ('path');
const { productDetail, productCart, createProduct, editProduct, allProducts, saveProduct, getProductDetail} = require('../controller/productcontroller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'./public/img/products'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
}); 

const upload = multer({ storage });

const { body } = require('express-validator');

const validations = [
body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
body('imagenProducto').custom((value, {req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
        throw new Error('Tienes que subir una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }
    return true;
}),
body('review').notEmpty().withMessage('Debe escribir una reseña del producto'),
body('descripcion').notEmpty().withMessage('Complete aquí la descripción del producto'),
body('productos').notEmpty().withMessage('Seleccione una característica'),
body('valor').notEmpty().withMessage('Introduzca un valor para su planta')
];

const routerProduct = express.Router();

//Listado de productos
routerProduct.get('/product/allproducts', allProducts);

//Formulario de creacion de producto
routerProduct.get('/product/createproduct', createProduct);

//Detalle de un producto particular
routerProduct.get('/product/productdetail/:id',  productDetail);

//Acción de creación (a donde se envía el formulario)
routerProduct.post('/product/createproduct', upload.single("imagenProducto"), validations,  saveProduct);

//Formulario de edición de productos
routerProduct.get ('/product/productedit/:id/', editProduct);

//accion de edicion 
//routerProduct.put('/product/editproduct/:id',  productController.editProduct);

routerProduct.put('/product/editproduct/:id', function(req, res){
    res.send("yendingggggggg");
}),

//Acción de borrado
//routerProduct.delete('/product/productdetail/:id', deleteProduct);

routerProduct.get('/product/productcart',  productCart);


module.exports= routerProduct;
