module.exports= function (sequelize, dataTypes){
    let alias = "Macetas";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },

        tipo: {
            type: dataTypes.STRING(73),
        },

        tamaño: {
            type: dataTypes.BIGINT(11),
        },

        color: {
            type: dataTypes.STRING(73)
        },

    }

    let config = {
        tableName: "maceta",
        timestamps: false

    }

    let Macetas = sequelize.define(alias, cols, config);

    Macetas.associate = function(models) {
        Macetas.hasMany(models.Productos, {
            as:"Productos",
            foreignKey:"id"
        });
    }
    
    return Macetas;
}