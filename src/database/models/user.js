//1. Guardar al usuario en la DB
//2. Buscar al usuario que se quiere loguear por su email
//3. buscar a un usuario por su ID
//4. Editar la informacion de un usuario 
//5. Elinminar a un usuario de la DB



// const fs = require('fs');

// const User = {
// fileName: '/src/database/users.json',

// getData: function () {
//     let allUsers = allUsers.pop();
//     if (lastUser){
//         return lastUser.id + 1;
//     }
//     return 1;
// },
// findAll: function () {
// return this.getData();
// },
// findByPk: function (id) {
//     let allUsers = this.findAll();
//     let userFound = allUsers.find(oneUser => oneUser.id === id);
//     return userFound;
// },
// findByField: function (field, text) {
//     let allUsers = this.findAll();
//     let userFound = allUsers.find(oneUser => oneUser[field] === text);
//     return userFound;
// },

// create: function (userData) {
//     let allUsers = this.findAll();
//         let newUser = {
//             id: this.generateId(),
//             ...userData
//         }
//         allUsers.push(newUser);
//         fs.writeFileSync(this.filrName, JSON.stringify(allUsers, null, ' '));
//         return true;
// },
// delete:function (id) {
//     let allUsers = this.findAll();
//     let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
//     fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
//     return true;
// }
// }

module.exports= function (sequelize, dataTypes){
    let alias = "Usuarios";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(20),
        },
        last_name: {
            type: dataTypes.STRING(20),
        },
        email: {
            type: dataTypes.STRING(50),
        },
        Img: {
            type: dataTypes.STRING(75),
        },
        ip_address: {
            type: dataTypes.STRING(15),
        },
        password: {
            type: dataTypes.STRING(75),
        },
        domicilio_id: {
            type: dataTypes.BIGINT(11)
        }
    }

    let config = {
        tableName: "users",
        timestamps: false

    }

    let Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models) {
        Usuarios.hasOne(models.Domicilio, {
            as:"Domicilio",
            foreignKey:"id"
        });
    }

    return Usuarios;
}

