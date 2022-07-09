const { ObjectId } = require('mongodb');
const mongo = require('./mongo')

const user = function()
{

    this.uploadImage = function(id,filepath,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('user').updateOne({
                    _id:ObjectId(id)
                },{
                    $set:{profilepic:filepath}
                },(err)=>
                {
                    if(err)
                        callback(false)
                    else
                        callback(true)    
                });    
            }else
                callback(false)
        })        
    }

    this.verifyUser = function(data,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('user').updateOne(data,{
                    $set:{isverify:true}
                },(err)=>
                {
                    if(err)
                        callback(false)
                    else
                        callback(true)    
                });    
            }else
                callback(false)
        })
    }

    this.saveUser = function(data,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('user').insertOne(data,(err)=>
                {
                    client.close()
                    if(err)
                    {
                        console.log(err)
                        callback(false)
                    }
                    else
                        callback(true)                        
                });
            }else{
                callback(false)
            }
        })
    }


    this.loginUser = function(data,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {                
                db.collection('user').findOne(data,(err,ob)=>
                {
                    //console.log(ob)
                    client.close()
                    if(err || ob==null)
                        callback(false)
                    else
                        callback(ob)                    
                });
            }else{
                callback(false)
            }
        })
    }
}

module.exports = new user()