const express = require('express');
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const cookies = require('cookie-parser');
const fs = require('fs');

const app = express();

const routerMain = require('./src/routes/main');
const routerProduct = require('./src/routes/product.js');
const routerUsers = require('./src/routes/users.js');
const routerProductAPI = require('./src/routes/productAPI.js');
const routerUsersAPI = require('./src/routes/usersAPI.js');
const methodOverride= require('method-override');

const port = process.env.PORT || 3030
const conn = require('./src/database/config/testConnection');

const publicFolderPath = path.join(__dirname, 'public');
console.log(publicFolderPath);

//Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//Configuraciones
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "secreto",
    resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(methodOverride('_method'));



//Routes
app.use(routerMain, routerUsers, routerProduct);
app.use(routerProductAPI, routerUsersAPI);



app.listen(port,()=>{
    conn.connect((error) =>{
        if(error)throw error;
        console.log('Connect to database tika_y_yura_db');
    });
    console.log(`servidor escuchando en puerto ${port}`);
});