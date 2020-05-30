  
const mysql = require('mysql');
const DB_NAME = 'complent'


function createDatabaseConnection(callback) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: DB_NAME,
    });
    // const connection = mysql.createConnection({
    //     host: 'sql12.freemysqlhosting.net',
    //     user: 'sql12343938',
    //     password: 'WdtvBR9U8B',
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

   