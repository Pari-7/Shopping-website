var Mongoose=require('mongoose')
var Schema = Mongoose.Schema

var userschema = new Schema({
    name:{required:true,type:String},
    email:{required:true,unique:true,type:String},
    wallet:{type:Number,default:50},
    password:{required:true,type:String},
    profileimage:{type:String},
    // id:{required:true,type:Number,unique:true},
    // phone:{required:true,unique:true,type:Number},
    isverified:{type:Boolean,default:false},
    role:{type:String,default:'user'}

})
module.exports=Mongoose.model('pari7user',userschema)