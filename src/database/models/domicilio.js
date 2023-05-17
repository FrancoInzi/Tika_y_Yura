module.exports= function (sequelize, dataTypes){
    let alias = "Domicilio";

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },

        calle: {
            type: dataTypes.STRING,
        },

        altura: {
            type: dataTypes.INTERGER,
        },

        piso: {
            type: dataTypes.INTERGER,
        },

        departamento: {
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: "domicilio",
        timestamps: false

    }

    let Domicilio = sequelize.define(alias, cols, config);

    Domicilio.associate = function(models) {
        Domicilio.belongsTo(models.Usuarios, {
            as:"Usuarios",
            foreignKey:"fk_usuario_domicilio"
        });

        Domicilio.associate = function(models) {
            Domicilio.belongsTo(models.Localidad, {
                as:"Domicilio",
                foreignKey:"localidad_id"
            });
        }
    }

    return Domicilio;
}