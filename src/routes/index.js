const express = require('express');
const router = express.Router();
const indexCtrl = require('../controller/controller');

router.get('/main', indexCtrl.main);

module.exports = router;
