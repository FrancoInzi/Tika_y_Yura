
module.exports= function (sequelize, dataTypes){
    let alias = "Usuarios";

    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.EMAIL,
        },
        Img: {
            type: dataTypes.STRNG,
        },
        ip_address: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.EMAIL,
        }
    }

    let config = {
        tableName: "users",
        timestamps: false

    }

    let Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models) {
        Usuarios.belongsTo(models.Domicilio, {
            as:"Domicilio",
            foreignKey:"domicilio_id"
        });
    }

    return Usuarios;
}
