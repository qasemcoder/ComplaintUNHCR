const
    express = require('express'),
    bodyParser = require('body-parser'),
    jsonweb = require('jsonwebtoken'),
     bc = require('bcryptjs'),
    {
        Send_To_Database,
        get_name_ind_from_Database,
        get_All_from_Database,
        get_search_from_Database,
        get_All_News_from_Database,
        Send_news_To_Database,
        get_color_number,
        Delete_N_Database,
        get_ALL_search_from_Database,
        put_new_color
    } = require('../compliantRepo/repo')


let app = express();
app.use(bodyParser.json());

let salt = '29p72w4rpowuhgpoayjh-t0938yn6tvp90w38y6nhtv-093v8y'
app.post('/login' , (req , res)=>{
    let email = req.body.email
    let pass = req.body.pass
console.log(email , pass)
let passs = '$2a$08$JqMWD0M4FyeALZ8.C921quNM/OsKAGD0k/BChCG/6CTyXTk0qoj9a'

let token = jsonweb.sign({email : email , pass:pass , hash:passs},salt)
console.log(token)
    bc.compare(pass , passs , (err , success)=>{
        if(err){
            console.log(error);
            res.sendStatus(401)
        }else if(success == false){
           res.send({status:401})
        } else if(success == true){
      res.send({status:200,token:token , result:success})      
        }
            
    })
})

var valdUserName= /^[a-z]+ +[a-z]+ +[a-z]/;
var phoneRGEX = /^[\+]?[0-9]{2}[)]?[" "\s\.]?[0-9]{4}[" "\s\.]?[0-9]{4,6}$/im
 var CaseNumberForUserRGEX = /^[0-9]{3}[\-]?[0-9]{2}?[C]?[0-9]{5}$/im
var indevaiualUserRGEX = /^[0-9]{3}[\-]?[0-9]{8}$/im

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
    let color = 0
    console.log(name, phone, casenumber, dis, block, home, reg, message);

if(valdUserName.test(name) == true && phoneRGEX.test(phone) == true && CaseNumberForUserRGEX.test(casenumber)==true
   && dis !== '' && block !== '' && home !== '' && message.length > 40 && indevaiualUserRGEX.test(ind) == true) {

    Send_To_Database(name, phone, casenumber, dis, block, home, reg, message, ind,color, (errore, succsessSend) => {
        if (errore) {
            console.log(errore)
            res.sendStatus(400)
        } else {
            res.send(succsessSend)
            console.log(succsessSend)
        }
    })

   }else{
       res.send({status : 400})
   }

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
app.get('/searche/:id', (req, res) => {
    let id = req.params.id
    get_ALL_search_from_Database(id, (error, result) => {
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
            res.send({result:succsessSend , status : 200})
            console.log(succsessSend)
        }
    })
})

app.delete("/delItem/:id" , (req , res)=>{
    let id = req.params.id;
Delete_N_Database(id , (error , result)=>{
    if (error) {
        console.log(error)
        res.sendStatus(400)
    } else {
        res.send(result)
        console.log(result)
    }
})
})

app.put('/ChangeColor/:id' , (req , res)=>{
    let id = req.params.id;
    put_new_color(id , (error , ChangeSuccess)=>{
        if(error){
            console.log(error)
        }else{
            res.send({ChangeSuccess:ChangeSuccess , status : 201})
        }
    })
})

app.get('/getelement' , (req , res)=>{
    get_color_number((error , result)=>{
        if(error){
console.log(error)
        }else{
            res.send(result)
        }
    })
})


module.exports = app;