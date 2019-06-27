var Mongoose = require('mongoose')
var Schema = Mongoose.Schema

var orderSchema =new Schema({
    id:{type:Number},
     pending:{type:Boolean},
    //completed:{type:Boolean,required:true},
    email:{type:String},
price:{type:Number},
    name:{type:String,required:true},
    mode:{type:String,default:'cash'},
    city:{type:String,required:true},
    area:{type:String,required:true},
    locality:{type:String},
    street:{type:String},
    pincode:{type:Number,required:true},
    phone:{type:Number,required:true},
    items:{type:Array},
})
module.exports=Mongoose.model('pari7order',orderSchema)