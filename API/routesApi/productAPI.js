const express = require('express');

const router = express.Router();

const {list, show} = require('../Controller/apiControllerProduct.js');
const apiControllerProduct = require('../Controller/apiControllerProduct.js');

router.get('/', apiControllerProduct.list);
router.get('/:id', apiControllerProduct.show);


module.exports = router;