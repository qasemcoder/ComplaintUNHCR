const
    express = require('express'),
    bodyParser = require('body-parser'),
     bc = require('bcryptjs'),
    {
        Send_To_Database,
        get_name_ind_from_Database,
        get_All_from_Database,
        get_search_from_Database,
        get_All_News_from_Database,
        Send_news_To_Database,
        Send_Login_To_Database
    } = require('../compliantRepo/repo')


let app = express();
app.use(bodyParser.json());


app.post('/login' , (req , res)=>{
    let email = req.body.email
    let pass = req.body.pass
console.log(email , pass)
let passs = '$2a$08$JqMWD0M4FyeALZ8.C921quNM/OsKAGD0k/BChCG/6CTyXTk0qoj9a'
    bc.compare(pass , passs , (err , success)=>{
        if(err){
            console.log(error);
            res.sendStatus(401)
        }else{
            console.log(success)
            Send_Login_To_Database(email , (error , data)=>{
                if(error){
                    console.log(error);
                    res.sendStatus(401)
                }else{
                    console.log(data)
                    res.send({data:data},{status:200})
                }
                    })
        }
    })
    
        






})

app.post("/", (req, res) => {
    // console.log(req.body)
    let name = req.body.name;
    let phone = req.body.phone;
    let casenumber = req.body.casenumber;
    let dis = req.body.dis;
    let block = req.body.block;
    let home = req.body.home;
    let reg = req.body.reg;
    let message = req.body.message;
    let ind = req.body.ind;
    console.log(name, phone, casenumber, dis, block, home, reg, message);
    Send_To_Database(name, phone, casenumber, dis, block, home, reg, message, ind, (errore, succsessSend) => {
        if (errore) {
            console.log(errore)
            res.sendStatus(400)
        } else {
            res.send(succsessSend)
            console.log(succsessSend)
        }
    })
})

app.get('/leftList', (req, res) => {
    get_name_ind_from_Database((error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(404)
        } else {
            res.send(result)
            console.log(result)
        }
    })
})
app.get('/content/:id', (req, res) => {
    let id = req.params.id
    get_All_from_Database(id, (error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(404)
        } else {
            res.send(result)
            console.log(result)
        }
    })
})

app.get('/search/:ind', (req, res) => {
    let ind = req.params.ind
    get_search_from_Database(ind, (error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(404)
        } else {
            res.send(result)
            console.log(result)
        }
    })  
})

app.get('/news', (req, res) => {
    get_All_News_from_Database((error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(404)
        } else {
            res.send(result)
            console.log(result)
        }
    })
})


app.post("/addnews", (req, res) => {
    // console.log(req.body)
    let newNews = req.body.newNews;
    
    console.log(newNews);
    Send_news_To_Database(newNews, (errore, succsessSend) => {
        if (errore) {
            console.log(errore)
            res.sendStatus(400)
        } else {
            res.send(succsessSend)
            console.log(succsessSend)
        }
    })
})




module.exports = app;