var express=require('express')
var server=express();
var Mongoose=require('mongoose')
var UserController=require('./usercontroller')
var ProductController=require('./productcontroller')
var BodyParser=require('body-parser');
var Cors=require('cors')
var path=require('path')
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
server.use(express.static(_dirname + '/distant'));
server.get('/', function(req,res){
    res.sendFile('./dist/k2/index.html')
})

server.post('/api/signup',UserController.signup)
server.post('/api/login',UserController.login)
server.post('/api/addproduct',ProductController.addproduct)
server.get('/api/allproducts',ProductController.allproducts)
server.post('/api/deleteaccount',UserController.deleteaccount)
server.get('/api/product/:id',ProductController.getProduct)
server.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/k2/index.html'));
    });