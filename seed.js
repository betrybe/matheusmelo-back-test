// colocar query do MongoDB
const connection = require('./src/api/db/connection');

let db;

connection.connectToServer((result) => {
    if (result != null) {
        throw result;
    }
    db = connection.getDb();
});

db.users.insertOne({ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' });