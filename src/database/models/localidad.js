module.exports= function (sequelize, dataTypes){
    let alias = "Localidad";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },

        provincia: {
            type: dataTypes.STRING(100),
        },

        localidad: {
            type: dataTypes.STRING(100),
        },

        ciudad: {
            type: dataTypes.STRING(100),
        }

    }

    let config = {
        tableName: "localidad",
        timestamps: false

    }

    let Localidad = sequelize.define(alias, cols, config);

    Localidad.associate = function(models) {
        Localidad.belongsTo(models.Domicilio, {
            as:"Localidad",
            foreignKey:"localidad_id"
        });
    }

    return Localidad;
}