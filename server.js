var express=require('express')
var server=express();
var Mongoose=require('mongoose')
var UserController=require('./usercontroller')
var ProductController=require('./productcontroller')
var BodyParser=require('body-parser');
var Cors=require('cors')
// var server=Mongoose();
const PORT=process.env.PORT||1000
const MONGOURL="mongodb://test:test1234@ds117729.mlab.com:17729/coerproject"
server.use(Cors())
server.use(BodyParser.json())

server.listen(PORT,function(){
    console.log("server is listening on",PORT);

Mongoose.connect(MONGOURL,function(error){
    console.log("Error in connecting to mongodb",error);
})
})
server.post('/signup',UserController.signup)
server.post('/login',UserController.login)
server.post('/addproduct',ProductController.addproduct)
server.get('/allproducts',ProductController.allproducts)
server.post('/deleteaccount',UserController.deleteaccount)
server.get('/product/:id',ProductController.getProduct)