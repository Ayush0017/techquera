const express = require('express')
const path = require('path')

const userModel = require('../models/UserModel')
const queryModel = require('../models/QueryModel')

const router = express.Router()
const sendMail = require('../service/EmailService')


router.post('/uploadpic',(request,response)=>
{
    var mypic = request.files.uploadFile
    
    var ext = path.extname(mypic.name)
    var filename = new Date().getUTCMilliseconds()+ext
    
    var filepath1 = path.join(__dirname,"../../public/userpic/",filename)
    var filepath2 = path.join(__dirname,"../../build/userpic/",filename)

    mypic.mv(filepath1)
    mypic.mv(filepath2)

    userModel.uploadImage(request.session.user._id,"/userpic/"+filename,(status)=>{
        request.session.user.profilepic = "/userpic/"+filename
        response.json({status:status})
    });    
})

router.post('/sendans',(request,response)=>
{
    var data = request.body
    var id = request.session.user._id;
    data.user = id
    queryModel.saveAns(data,(result)=>
    {
        response.json({status:result})
    })
})

router.get('/loadotherquery',(request,response)=>
{
    var id = request.session.user._id;
    queryModel.loadOtherQuery(id,(result)=>
    {
        response.json(result)
    })
})

router.get('/loadquery',(request,response)=>
{
    var id = request.session.user._id;
    queryModel.loadQuery(id,(result)=>
    {
        response.json(result)
    })
})

router.post('/ask',(request,response)=>
{
    var data = request.body
    data.user = request.session.user._id
    data.send_date = new Date().toDateString()

    queryModel.saveQuery(data,(result)=>
    {
        response.json({status:result})
    })
});

router.get("/verifyuser",(request,response)=>
{
    console.log(request.query)
    userModel.verifyUser(request.query,(result)=>
    {
        if(result)
            response.send("<h2>Verified Successfully !</h2>")
        else
            response.send("<h2>Verified Failed !</h2>")
    })    
})


router.post("/saveuser",(request,response)=>
{
    var otp = (Math.floor(Math.random()*90000) + 10000)+"";
    var user = request.body;
    sendMail(user.user_name,user.email,otp,(status)=>
    {
        if(status)
        {
            user.otp = otp
            user.isverify = true
            user.profilepic = "/userpic/logo.png"
            userModel.saveUser(user,(result)=>
            {
                response.json({status:result})
            })
        }else{
            response.json({status:false})
        }   
    })       
})

router.post("/loginuser",(request,response)=>
{    
    userModel.loginUser(request.body,(result)=>
    {
        if(result)
        {
            if(result.isverify)
            {
                request.session.user = result
                response.json({status:true,verify:true})
            }else{
                response.json({status:true,verify:false})
            }
        }
        else    
            response.json({status:false})
    })
})

router.get("/logout",(request,response)=>
{
    request.session.destroy()
    response.json({status:true})
});

router.get("/checksession",(request,response)=>
{
    if(request.session.user==undefined)
        response.json({status:false})
    else
    {
        var pic = request.session.user.profilepic
        response.json({status:true,pic:pic})    
    }
})

module.exports = router