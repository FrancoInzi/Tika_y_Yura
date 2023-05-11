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
        tableName: "prducts",
        timestamps: false

    }

    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Productos.belongsTo(models.Usuarios, {
            as:"",
            foreignKey:""
        });
    
        Productos.belongsToMany(models, {
            as:"",
            through:"",
            foreignKey:"",
            otherKey:"",
            timestamps: false
        });
    }
    return Productos;
}