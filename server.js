const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'))
const save = require('./api/complaint')
app.use(save)

// app.get(routBase, (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');

// })
app.get( '/', (req, res, next) => {
    res.sendFile(__dirname + '/public/home.html');
})

app.get( '/form', (req, res, next) => {
    res.sendFile(__dirname + '/public/form.html');
})
app.get( '/admin', (req, res, next) => {
    res.sendFile(__dirname + '/public/admin.html');
})
app.get( '/login', (req, res, next) => {
    res.sendFile(__dirname + '/public/Login/login.html');
})

app.listen(port, () => console.log(`server is running on port ${port}`))