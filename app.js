const express = require('express');
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const cookies = require('cookie-parser');
const fs = require('fs');


const app = express();
const routerMain = require('./src/routes/main.js');
const methodOverride= require('method-override');

const port = process.env.PORT || 3030

const publicFolderPath = path.join(__dirname, './public');
console.log(publicFolderPath);

//Configuraciones
app.set('view engine', 'ejs');
app.use(express.static(publicFolderPath) );
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(session({
    secret: "Nuestro mensaje secreto",
    resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(methodOverride('_method'));

//404
app.use((req, res) =>{
    res.status(404).render('not-found');
})

//Routes
app.use(routerMain);


app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));