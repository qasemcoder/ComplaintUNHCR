let {createDatabaseConnection , DB_NAME} = require('../database/config')


function Send_To_Database(name,phone,casenumber,dis,block,home,reg,message,ind,callback) {
    let sql = `INSERT INTO ${DB_NAME}.save (name, phone, casenumber,dis, block, home, reg, message, ind) VALUES ('${name}', '${phone}', '${casenumber}', '${dis}', '${block}', '${home}', '${reg}', '${message}', '${ind}');`
   
    createDatabaseConnection((connectError, connection) => {
        console.log(connectError);
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                    callback(error,result);
                connection.end()
            });
        }
    });
}
function get_name_ind_from_Database(callback) {
    let sql = `select id,name,ind from ${DB_NAME}.save;`
   
    createDatabaseConnection((connectError, connection) => {
        console.log(connectError);
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                    callback(error,result);
                connection.end()
            });
        }
    });
}
function get_All_from_Database(id,callback) {
    let sql = `select * from ${DB_NAME}.save where id = ${id};`
   
    createDatabaseConnection((connectError, connection) => {
        console.log(connectError);
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                    callback(error,result);
                connection.end()
            });
        }
    });
}

function get_search_from_Database(ind,callback) {
    let sql = `select id,name,ind from ${DB_NAME}.save where ind = ${ind};`
   
    createDatabaseConnection((connectError, connection) => {
        console.log(connectError);
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                    callback(error,result);
                connection.end()
            });
        }
    });
}


function get_All_News_from_Database(callback) {
    let sql = `select news from ${DB_NAME}.news;`
   
    createDatabaseConnection((connectError, connection) => {
        console.log(connectError);
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                    callback(error,result);
                connection.end()
            });
        }
    });
}


module.exports= {Send_To_Database,get_name_ind_from_Database,get_All_from_Database,get_search_from_Database, get_All_News_from_Database}