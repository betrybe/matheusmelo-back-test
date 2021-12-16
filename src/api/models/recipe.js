const { ObjectID } = require('mongodb');
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
    async findById(id) {
        const objectId = new ObjectID(id);
        return collection.findOne({ _id: objectId });
    },
    async findAll() {
        return collection.find({});
    },
};
