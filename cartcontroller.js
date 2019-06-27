var CartModel=require('./cartmodel')

exports.addToCart=function(req,res){
if(req.body.email && req.body.productid){
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
  if(req.body.email){
        CartModel.find({email:req.body.email}).then(function(items){
            console.log("items in cart",)
            res.send({
               data:items,
               code:100 
            })
    },function(error)

    {
        console.log("error in getting cart items")
        res.send({
           error:"error in getting cart items",
           code:200 
        })
    })
}
    else{
res.send({
    error:"Insufficient details",
    code:300
})


    
}
}
exports.removeItem = function(req,res){
    if(req.body.email && req.body.productid){
      CartModel.remove({email:req.body.email,productid:req.body.productid})
      .then(function(removed){
          console.log("item removed from db" , removed)
          res.send({
              code:200
          })
      }, function(error){
          console.log("ierror in tem removed from db" , error)
          res.send({
              code:500
          }) 
      })
    }else{
        res.send({
            error:'Insufficient Details',
            code:400
        })
    }
}