const createUserService = require('../services/user/create.user.service');

exports.create = async (request, response) => {
    const { name, email, password } = request.body;
    const user = await createUserService.execute(name, email, password, 'user');
    return response.json(user);
};