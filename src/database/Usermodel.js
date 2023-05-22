const { error } = require('console');
const fs = require('fs');
const path = require('path');

const User = {

    filename: path.join(__dirname, '../users.json'),

    getallusers: () => {
        return JSON.parse(fs.readFileSync(User.filename, 'utf-8'))
    },

    newid: () => {
        const allUsers = User.getallusers();

        if (allUsers.length) {
            return (allUsers[allUsers.length - 1].id) + 1;
        } else {
            return 1;
        }
    },

    create: (data) => {
        const users = User.getallusers();
        console.log(data, 'soy data')
        const newUser = {
            id: User.newid(),
            ...data
        }

        users.push(newUser);

        fs.writeFile(User.filename, JSON.stringify(users, null, ''), (error) => {
            if (error) {
                return false
            }
        });
        return newUser;
    },
    findByPK: (id) => {
        return User.getallusers().find((e) => e.id == id);



    },
    findByField: (field, text) => {
        return User.getallusers().find((e) => e[field] == text);

    },
}
module.exports = User