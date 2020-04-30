const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const mysql = require('mysql');

let config = require('./database/config.js');
let connection = mysql.createConnection(config);

const app = express();

const port = 3000;


app.set('view engin', 'js')
app.set('views', 'views')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/form', function (req, res) {
    fs.readFile(__dirname + '/views/form.html', 'utf8', function (err, form) {
        res.send(form);
    });
})


app.post('/form', (req, res) => {
    let username = req.body.username;
    let phone = req.body.phone;
    let casenumber = req.body.casenumber;
    let dis = req.body.dis;
    let block = req.body.block;
    let home = req.body.home;
    let reg = req.body.reg;
    let message=req.body.msg;
    console.log(username,phone,casenumber,dis,block,home,reg);
    var sql = `INSERT INTO infoproof (username, phone, dis, block, home, case, ind, reg, msg) VALUES ('${username}', '${phone}','${casenumber}','${dis}','${block}','${home}','${reg}','${message}')`;
    connection.query(sql);

connection.end();
    res.end();

})



app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));

})

app.get('form', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/form.html'));
})

app.listen(port, () => console.log(`server is running on port ${port}`))