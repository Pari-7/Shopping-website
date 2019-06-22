var nodemailer = require("nodemailer");
// var eid

//     exports.sendMail=function(emailid){
//         eid=emailid;
//       main()  
//     }
//     async function main(){
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "tanushree77.pg@gmail.com", 
//       pass: "ynitsed@2201" 
//     }
//   });
//   let info = await transporter.sendMail({
//     from: "tanushree77.pg@gmail.com", // sender address
//     to: eid, // list of receivers
//     subject: "Hello ", // Subject line
//     text: "Poory is th best", // plain text body
//   });
// console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
// main().catch(console.error);
exports.sendMail = function(emailid,){
  return new Promise(function(resolve,reject){
      let testAccount =  nodemailer.createTestAccount(); 
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: "gmail",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "", // generated ethereal user
            pass:  ""// generated ethereal password
          },
          tls:{
              rejectUnauthorized:false
          }
        });
      
        // send mail with defined transport object
        let info = transporter.sendMail({
          from: '"Pari Goyal" <tanushree77.pg@gmail.com>', // sender address
          to: kisko, // list of receivers
          subject:"Account Created", // Subject line
          text: kya // html body
        } , function(error,info){
            if(error){
                reject(error)
            }
            else{
                resolve(info)
                console.log("Message sent: %s", info.messageId);                  
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); 
            }
        });
  })
}


    
    