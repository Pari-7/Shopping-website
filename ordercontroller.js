var Ordermodel = require('./ordermodel')
var CartModel = require('./cartmodel')
exports.addOrder = function(req,res){
    var ord = req.body
    if(ord.items.length>0 && ord.email && ord.price && ord.area && ord.street && ord.city && ord.phone && ord.pincode )
    {
       ord.id = Date.now()
       var orderdata = new Ordermodel(ord)
       orderdata.save().then((neworder)=>{
           console.log("order created" ,neworder);
           if(neworder){
               CartModel.remove({email:ord.email}).then((success)=>{
                   res.send({
                       data : neworder,
                       code:200
                   })

               },(error)=>{
                   
                   res.send({
                       error:"error in placing order",
                       code:500
                   })

               })
           }
        },(error)=>{
            // Ordermodel.remove({id:neworder.id,email:neworder.email})
            console.log("error ocuurs",error)
            res.send({
                error: "error occurs"
            })


       })
    }else{
         res.send("provide full detail")
    }
}
