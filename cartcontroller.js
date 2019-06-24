var CartModel=require('./cartmodel')

exports.addToCart=function(req,res){
if(req.body.email && req.body.password){
var cartdata=new CartModel(req.body) 
cartdata.save()
.then(function(newcart){
console.log("Item Added To Cart",newcart)
res.send({
    data:newcart,
    code:100
})
},
function(error){
console.log("error in adding to cart",error)
res.send({
    code:200,
    error:"Internal Server Error"

})
})
}
else{
    res.send({
        code:300,
        error:"Insufficient details"
    })
}
}
exports.cartItems = function(req,res){
    CartModel.findOne({email:req.body.email}).then(function(products){
        console.log("all items found",)
        res.send({
            data:products
        }),
function(error){
    res.send({
        error:"Error"
    })
}
    })
}

