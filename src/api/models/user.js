const connection = require('../db/connection');

let db;

let collection;

connection.connectToServer((result) => {
    if (result != null) {
        throw result;
    }
    db = connection.getDb();
    collection = db.collection('users');
});

module.exports = {
    async insert(name, email, password, role) {
        return collection.insertOne({
            name,
            email,
            password,
            role,
        });
    },
    async findByEmail(email) {
        return collection.findOne({ email });
    },
};
