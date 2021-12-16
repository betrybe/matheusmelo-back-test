const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer(callback) {
        if (this.getDb() != null) {
            return callback();
        }
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db('Cookmaster');
            console.log('Conectado com o mongo com sucesso.');

            return callback();
        });
    },
    
    getDb() {
        return dbConnection;
    },
};