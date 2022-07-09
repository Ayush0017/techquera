const nodemailer = require('nodemailer');

function sendVerifyMail(name,email,otp,callback)
{  
    console.log("Mail Send Start") 
    var link = "<b> http://localhost:8989/user/verifyuser?email="+email.trim()+"&otp="+otp+"</b>";

    var message = "<html><body><h1>Hello " + name + " !</h1><hr> &nbsp;&nbsp; Welcome in TechQuera , please verify your account with this link : <br><br> "+link+"</body></html>";

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'justsample4mail@gmail.com',
        pass: 'samplemail@123'
      }
    });
    console.log("Mail Transport Start") 
    var mailOptions = {
      from: 'justsample4mail@gmail.com',
      to: email,
      subject: 'TechQuera Verification Mail',
      html: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) 
      {
        console.log(error) 
        callback(false);
      } else {
        callback(true);
      }
    });
}

module.exports = sendVerifyMail