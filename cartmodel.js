var Mongoose=require('mongoose')
var Schema=Mongoose.Schema
var cartSchema=new Schema({
    productid:{type:Number,required:true},
    email:{type:String,required:true},
    productname:{type:String,required:true},
    productimage:{type:String,required:true},
    productprice:{type:Number,required:true},
    productquantity:{type:Number,default:1}
    
})
module.exports=Mongoose.model('pari7cart',cartSchema)
