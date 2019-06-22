var express=require('express')
var server=express();
var Mongoose=require('mongoose')
var UserController=require('./usercontroller')
var BodyParser=require('body-parser')
// var server=Mongoose();
const PORT=1000||process.env.PORT
const MONGOURL="mongodb://localhost:27017/coerproject"
server.use(BodyParser.json())

server.listen(PORT,function(){
    console.log("server is listening on",PORT);

Mongoose.connect(MONGOURL,function(error){
    console.log("Error in connecting to mongodb",error);
})
})
server.post('/signup',UserController.signup)
