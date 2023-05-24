const express = require('express');
const router = express.Router();

const {list, show} = require('../Controller/apiControllerUser.js');
const apiControllerUser = require('../Controller/apiControllerUser');

router.get('/', apiControllerUser.list);
router.get('/:id', apiControllerUser.show);


module.exports = router;