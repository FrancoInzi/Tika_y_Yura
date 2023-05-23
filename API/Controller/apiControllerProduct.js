//apiController
const DB = require('../database/models/product');

    
// const Op = DB.Sequelize.Op;

//metodo que consulta todas los product

module.exports = {
    list: (_req, res) => {
        DB.Product
        .findAll()
        .then(product => {
            return res.status(200).json({
                total: product.length,
                data: product,
                status: 200
            })
        })
    },

//metodo que consulta un product en particular
show: (req, res) => {
    DB.Product
    .findByPk(req.params.id)
    .then(product => {
        return res.status(200).json({
            data: product,
            status: 200
        })
    })
}
}
