var UserModel=require("./usermodel")
var email = require("./mailer")

exports.signup=function(req,res){
if(req.body.name && req.body.email && req.body.password ){
    req.body.id=Date.now()
var userdata=new UserModel(req.body)
userdata.save().then(function(newuser){
console.log("new user",newuser)

res.send({
    message:"Signup Success",
    code:100
})
Mailer.sendMail(req.body.email,"Welcome","successful registration").then(function(success){
},
function(error){
    console.log("error in sending mail",error)
})
},
function(error){
    console.log("error in signup",error)
    if(error.code=11000){
res.send({
    error:"User already Registered",
    code:200
})
    }
    else{
        res.send({
            error:"Some error occured in user registration",
            code:300
        })
    }
})


}

else{
console.log("Insufficient details")
res.send({
    error:"Insufficient details",
    code:400
})
}
}
var UserModel=require("./usermodel")
exports.login=function(req,res){
    if(req.body.email && req.body.password){
        UserModel.find({email:req.body.email, password:req.body.password})
        .then(function(user){
            console.log("user found" , user)
          if(user.length>0){
              
              var responseobj = {
                  wallet:user[0].wallet,
                  email:user[0].email,
                  role:user[0].role,
                  name:user[0].name
              }
              res.send({
                  data:responseobj,
                  code:100
                  
              })
          }
          else{
              res.send({message:"Invalid Login",  
              code:200}
            
              )
          }
        },
    function(error){
         res.send({
             error:"Some Error Occured in Login",
             code:300
         })
    })
   }
   else{
       res.send({
           error:"Invalid Login",
           code:404
       })
   }
}

exports.deleteaccount=function(req,res){
    if(req.body.email){
        var dataobj={
            email:req.body.email
        }
        UserModel.remove(request).then(function(success){
            if(success){
                console.log("Account deleted",user)
                res.send({
                    message:"ACCOUNT DELETED",
                    code:1100
                })

            }
            else{
console.log("user no removed")
            }
        },
        function(error){
            res.send({
                error:"Some error occured in login",
code:1300
            })
        })
    }
    else{
        console.log()
        res.send({
            error:"email to dede",
            code:1234
        })    }
    }
exports.forgotpassword=function(req,res){
    if(req.body.email){
UserModel.findOne({email:req.body.email})
.then(function(user){
    if(user){
        console.log("user details",user)
        var email=user.email
        var password=user.password
        Mailer.sendMail(user,email,user,password,"Password RECOVERY").then(function(success){
        if(success){
            
            res.send({
                message:"",
                code:1400
            })
       
    }
},
        function(error){
            console.log("error in sending password",error)
        }
        )
    }

    
    else{
        res.send({
            error:"Please provide email",
code:!300
        })
        console.log("Email not found")
    }
},function(error){
    res.send({
        code:!200
    })
    console.log("user noy found")
})
}
else{
    res.send({
        code:1500
    })
console.log("sendmail id")
}
}