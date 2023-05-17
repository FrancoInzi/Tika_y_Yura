module.exports= function (sequelize, dataTypes){
    let alias = "Macetas";

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },

        tipo: {
            type: dataTypes.STRING,
        },

        tamaño: {
            type: dataTypes.INTERGER,
        },

        color: {
            type: dataTypes.STRING
        },

    }

    let config = {
        tableName: "macetas",
        timestamps: false

    }

    let Macetas = sequelize.define(alias, cols, config);

    Macetas.associate = function(models) {
        Macetas.hasMany(models, {
            as:"Productos",
            foreignKey:"fk_producto_maceta"
        });
    }
    
    return Macetas;
}