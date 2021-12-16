const connection = require('../db/connection');

let db;

let collection;

connection.connectToServer((result) => {
    if (result != null) {
        throw result;
    }
    db = connection.getDb();
    collection = db.collection('recipes');
});

module.exports = {
    async insert(name, ingredients, preparation, userId) {
        return collection.insertOne({
            name,
            ingredients,
            preparation,
            userId,
        });
    },
};
