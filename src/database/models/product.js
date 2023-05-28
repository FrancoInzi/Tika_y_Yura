

module.exports= function (sequelize, dataTypes){
    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(100),
        },

        other_name: {
            type: dataTypes.STRING(100),
        },

        description: {
            type: dataTypes.STRING(100),
        },

        features: {
            type: dataTypes.STRING(100),
        },
        price: {
            type: dataTypes.DECIMAL(3,1),
        },
        image:{
            type: dataTypes.STRING(100),
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