const express = require('express');

const userController = require('../controllers/user.controller');
const LoginValidation = require('../validations/login.validation');

const router = express.Router();

router.post('/', LoginValidation, userController.login);

module.exports = router;