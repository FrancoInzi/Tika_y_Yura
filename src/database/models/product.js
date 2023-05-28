

module.exports= function (sequelize, dataTypes){
    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(73),
        },

        other_name: {
            type: dataTypes.STRING(117),
        },

        description: {
            type: dataTypes.STRING(620),
        },

        features: {
            type: dataTypes.STRING(630),
        },
        price: {
            type: dataTypes.DECIMAL(7,2),
        },
        image:{
            type: dataTypes.STRING(75),
        },
        maceta_id:{
            type: dataTypes.BIGINT(11),
        }
    }

    let config = {
        tableName: "products",
        timestamps: false

    }

    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Productos.belongsTo(models.Macetas, {
            as:"Productos",
            foreignKey:"maceta_id"
        });
    }
    return Productos;
}