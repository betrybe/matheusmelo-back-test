const createUserService = require('../services/user/create.user.service');

exports.create = (request, _response) => {
    const { name, email, password } = request.body;
    createUserService.execute(name, email, password);
};