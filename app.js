const express = require('express');
const path = require('path');

const app = express();
const routerMain = require('./src/routes/main.js');
const methodOverride= require('method-override');

const port = process.env.PORT || 3030

const publicFolderPath = path.join(__dirname, './public');
console.log(publicFolderPath);

//Configuraciones
app.use(express.static(publicFolderPath) );
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

//Routes
app.use(routerMain);


app.set('view engine', 'ejs');



app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));