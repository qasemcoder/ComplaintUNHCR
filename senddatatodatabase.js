const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const data = require('./database/databaseConfig')


    app.post('/form', (req, res) => {
        let username=req.body.username;
        let phone=req.body.phone;
        let casee =req.body.case;
        let proof=req.body.proof;
        let dis=req.body.dis;
        let block=req.body.block;
        let home=req.body.home;
        let reg=req.body.reg;
        console.log(username);
    })
