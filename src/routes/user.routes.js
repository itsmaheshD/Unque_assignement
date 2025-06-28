const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.Controller');


router.get('/qpi/admin/login', userController.getusers);

module.exports = router;