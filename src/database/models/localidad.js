module.exports= function (sequelize, dataTypes){
    let alias = "Localidad";

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },

        provincia: {
            type: dataTypes.STRING,
        },

        localidad: {
            type: dataTypes.STRING,
        },

        ciudad: {
            type: dataTypes.STRING,
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
            foreignKey:"fk_domicilio_localidad"
        });
    }

    return Localidad;
}