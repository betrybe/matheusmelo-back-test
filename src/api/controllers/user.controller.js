const createUserService = require('../services/user/create.user.service');
const loginService = require('../services/user/login.service');

exports.create = async (request, response) => {
    const { name, email, password } = request.body;
    const user = await createUserService.execute(name, email, password, 'user');
    delete user.password;
    return response.status(201).json({ user });
};

exports.login = async (request, response, next) => {
    const { email, password } = request.body;
    try {
        const token = await loginService.execute(email, password);
        return response.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};