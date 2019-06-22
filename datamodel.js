var Mongoose=require('mongoose')
var Schema = Mongoose.Schema

var productschema = new Schema({
    name:{required:true,type:String},
quantity:{required:true,type:Number},
id:{required:true,type:Number},
    color:{type:String,required:true},
    manufactured:{type:String},
    image:{type:String,required:true},
    category:{type:String},
    seller:{type:String},
    details:{type:String},
    reviews:{type:Number,default:4},
    availabilty:{type:String,default:"available"},
    price:{type:Number}

})
module.exports=Mongoose.model('product',productschema)