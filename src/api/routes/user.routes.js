const express = require('express');

const userController = require('../controllers/user.controller');
const createUserValidation = require('../validations/create.user.validation');

const router = express.Router();

router.post('/', createUserValidation, userController.create);

module.exports = router;