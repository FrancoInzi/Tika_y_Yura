module.exports= function (sequelize, dataTypes){
    let alias = "Localidad";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },

        provincia: {
            type: dataTypes.STRING(73),
        },

        localidad: {
            type: dataTypes.STRING(73),
        },

        ciudad: {
            type: dataTypes.STRING(73),
        }

    }

    let config = {
        tableName: "localidad",
        timestamps: false

    }

    let Localidad = sequelize.define(alias, cols, config);

    Localidad.associate = function(models) {
        Localidad.hasMany(models.Domicilio, {
            as:"Localidad",
            foreignKey:"localidad_id"
        });
    }

    return Localidad;
}