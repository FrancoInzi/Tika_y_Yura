const db = require("../database/models/");
const {Sequelize} = require('sequelize');
const User = require('../database/models/user')(db.sequelize, Sequelize);
const Domicilio = require('../database/models/domicilio')(db.sequelize, Sequelize);

User.hasOne(Domicilio, {foreignKey:'id'});

const usersControllerAPI = {
    
    listAll: (req, res) => {
        User.findAll({ 
            include: Domicilio
        })
        .then(users => {
            res.status(200).json({
                total: users.length,
                data: users.map(users => {
                    return {
                        id: users.id,
                        nombre: users.first_name,
                        apellido: users.last_name,
                        email: users.email,
                        detail: `/api/users/detail/${users.id}`

                    }
                })
            })
        })
    },

    detail: (req, res) => {
        const { id } = req.params;
        User.findByPk(id)
            .then(users => res.status(200).json(
                {
                    id: users

                }
            )
            )
    },

    findId: (req, res) => {

        const { id } = req.params;
        User.findByPk(id)
            .then(users => {
                res.status(200).json(
                    {
                        url: users.img,

                    }
                )
            })

    }
}
module.exports = usersControllerAPI;