const db = require('../database/models');
//const Product = db.product;


const productControllerAPI = {
    
    listAll: (req,res) => {
        db.product.findAll({
            include: ['Productos']
        })
        .then(Productos => {res.status(200).json({
            total: Productos.length,            
            data: Productos.map(Product => {return{
                id: Product.id,
                nombre: Product.nombre,
                descripcion: Product.descripcion,
                macetas_id: Product.Productos,
                detail: '/api/product/detail/:id'  
                }
            })
        })})
    },
    detail: (req,res)=>{
        const {id}=req.params;
        Product.findByPk(id,{include:['Productos']})
        .then(Product=>res.status(200).json(
            {
                data: Product
            }
        ))
    }
 
}



module.exports = productControllerAPI;