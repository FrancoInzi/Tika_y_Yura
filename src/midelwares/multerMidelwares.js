const multer = require('multer');
const path = require('path');
const publicFolderPath = path.join(__dirname, './Public');
console.log(publicFolderPath);



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/img/users'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

let fileUpload = multer({storage})



module.exports =  fileUpload
