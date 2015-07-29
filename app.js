var express = require('express')
var bodyParser = require('body-parser')
var db = require('./public/database')
var app = express()

 
app.use(function(req,res,next){
    console.log(req.method)
    next()
})

app.use('/', express.static('public'))

app.use(bodyParser())

app.post('/contact', function(req,res){

    console.log(req.body)
    db.addPersonInfo(res,req.body)
})


app.listen(3000)