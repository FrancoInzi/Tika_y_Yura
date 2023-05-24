//apiController
const DB = require('../../src/database/models');

// const Op = DB.Sequelize.Op;

//metodo que consulta todos los usuarios
module.exports = {
    list: (req, res) => {
        DB.User
        .findAll()
        .then(user => {
            return res.status(200).json({
                total: user.length,
                data: user,
                status: 200
            })
        })
    },

//metodo que consulta un usuario en particular
show: (req, res) => {
    DB.User
    .findByPk(req.params.id)
    .then(user => {
        return res.status(200).json({
            data: user,
            status: 200
        })
    })
}
}