var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/person_info', function(err,succ){

if(err) {
    console.log("Failed to connect" + err)
}
    else {
        console.log("you are in")
    }
})
//this is the document "the schema" of the data mode
var personInfo = mongoose.Schema({
    user_name: String,
    address: String,
    email: String,
    
    })

var PersonInfoModel = mongoose.model('PersonInfo',personInfo)


exports.addPersonInfo = function(req,res,data){

 var temo = PersonInfoModel()
 temp.user_name = data.user_name
 temp.address = data.address
 temp.email = data.email
 
 temp.save()
 res.send("Your information" + data + "was saved in db")
}