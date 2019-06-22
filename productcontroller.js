var ProductModel=require('./datamodel')
exports.addproduct=function(req,res){
    var prod=req.body
    if(prod.name && prod.quantity && prod.color && prod.price &&prod.image ){
        prod.id=Date.now()
    var prod =new ProductModel(prod)
    prod.save().then(function(newproduct){
    console.log("new Product added")
    res.send({
       data:newproduct
    })
    },
    function(error){
        console.log("error in product addition",error)
    
            res.send({
                error:"Some error occured in product addition"
            })
        })
    
    
    }
    
    else{
    console.log("Insufficient details")
    res.send({
        error:"Insufficient details"
    })
    }
    }
    
exports.allproducts=function(req,res){
    ProductModel.find({}).then(function(products){
        console.log("all products found",products)
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
exports.getProduct=function(req,res){
    ProductModel.findOne({id:req.params.id})
.then(function(productfound){
    if(productfound){
        res.send({
            data:productfound,
            code:100
        })
    }
    else{
        res.send({
            message:"no product for this is",
            code:300
        })
    }
},
function(error){
res.send({
    error:"Error in finding product",
    code:400
})
})
}
