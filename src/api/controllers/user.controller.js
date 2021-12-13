const createUserService = require('../services/user/create.user.service');

exports.create = (request, response) => {
    createUserService.execute();
};