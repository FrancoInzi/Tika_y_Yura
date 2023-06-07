const path = require('path');
const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);

const validations = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('country').notEmpty().withMessage('Tienes que escribir un pais'),
    body('avatar').custom((value, {req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validations;