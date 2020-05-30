const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'))
const save = require('./api/complaint')
app.use(save)

app.use(bodyParser.urlencoded({ extended: false }));
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
app.get( '/addnews', (req, res, next) => {
    res.sendFile(__dirname + '/public/formNews.html');
})
app.get( '/editnews', (req, res, next) => {
    res.sendFile(__dirname + '/public/all_News.html');
})
app.listen(port, () => console.log(`server is running on port ${port}`))