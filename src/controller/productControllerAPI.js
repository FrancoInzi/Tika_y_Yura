const db = require('../database/models');
const {Sequelize} = require('sequelize');
const Product = require('../database/models/product')(db.sequelize, Sequelize);
const Maceta = require('../database/models/macetas')(db.sequelize, Sequelize);

Product.belongsTo(Maceta, {foreignKey:'id'});

const productControllerAPI = {
    
    listAll: (req,res) => {
        Product.findAll({
            include: Maceta
        })
        .then(products => {res.status(200).json({
            total: products.length,            
            data: products.map(products => {return{
                id: products.id,
                nombre: products.name,
                descripcion: products.description,
                macetas_id: products.macetas_id,
                detail: `/api/product/detail/${products.id}`
                }
            })
        })})
    },
    detail: (req,res)=>{
        const {id}=req.params;
        Product.findByPk(id,{include: Maceta})
        .then(products=>res.status(200).json(
            {
                data: products
            }
        ))
    }
 
}



module.exports = productControllerAPI;