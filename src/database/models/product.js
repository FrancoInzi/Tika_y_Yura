const macetas = require("./macetas");

module.exports= function (sequelize, dataTypes){
    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING,
        },

        other_name: {
            type: dataTypes.STRING,
        },

        description: {
            type: dataTypes.STRING(100),
        },

        features: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.NUMBER,
        },
        image:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "products",
        timestamps: false

    }

    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Localidad.belongsTo(models.Productos, {
            as:"Productos",
            foreignKey:"maceta_id"
        });
    }
    return Productos;
}