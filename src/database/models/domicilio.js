module.exports = function (sequelize, dataTypes) {
    let alias = "Domicilio";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },

        calle: {
            type: dataTypes.STRING(100),
        },

        altura: {
            type: dataTypes.BIGINT(10),
        },

        piso: {
            type: dataTypes.BIGINT(10),
        },

        departamento: {
            type: dataTypes.BIGINT(10),
        },
    }

    let config = {
        tableName: "domicilio",
        timestamps: false

    }

    let Domicilio = sequelize.define(alias, cols, config);

    Domicilio.associate = function (models) {
        Domicilio.belongsTo(models.Usuarios, {
            as: "Usuarios",
            foreignKey: "domicilio_id"
        });
        Domicilio.belongsTo(models.Localidad, {
            as: "Domicilio",
            foreignKey: "localidad_id"
        });

    }

    return Domicilio;
}