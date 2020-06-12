  
const mysql = require('mysql');
const DB_NAME = 'sql12346983'

function createDatabaseConnection(callback) {
 
    const connection = mysql.createConnection({
        host: 'sql12.freemysqlhosting.net',
        user: 'sql12346983',
        password: 'eWBW3gFhvS',
        database: DB_NAME,
    });
    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '12345',
    //     database: DB_NAME,
    // });
    connection.connect(error => {
        if (callback) {
            callback(error, connection)
        }
    });
}

module.exports = {
    createDatabaseConnection,
    DB_NAME
};

   