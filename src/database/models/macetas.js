module.exports= function (sequelize, dataTypes){
    let alias = "Macetas";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },

        tipo: {
            type: dataTypes.STRING(100),
        },

        tamaño: {
            type: dataTypes.BIGINT(10),
        },

        color: {
            type: dataTypes.STRING(100)
        },

    }

    let config = {
        tableName: "macetas",
        timestamps: false

    }

    let Macetas = sequelize.define(alias, cols, config);

    Macetas.associate = function(models) {
        Macetas.hasMany(models.Productos, {
            as:"Productos",
            foreignKey:"maceta_id"
        });
    }
    
    return Macetas;
}