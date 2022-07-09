const mongo = require('./mongo')

const query = function()
{
    this.saveAns = function(data,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('answer').insertOne(data,(err)=>
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

   

    this.saveQuery = function(data,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('query').insertOne(data,(err)=>
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

    this.loadQuery = function(id,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('query').find({user:id}).toArray((err,records)=>
                {
                    client.close()
                    if(err)
                    {
                        console.log(err)
                        callback([])
                    }
                    else
                        callback(records)                        
                });
            }else{
                callback([])
            }
        })
    }

    this.loadOtherQuery = function(id,callback)
    {
        mongo((status,db,client)=>
        {
            if(status)
            {
                db.collection('query').find({user:{$ne:id}}).toArray((err,records)=>
                {
                    client.close()
                    if(err)
                    {
                        console.log(err)
                        callback([])
                    }
                    else
                        callback(records)                        
                });
            }else{
                callback([])
            }
        })
    }


}

module.exports = new query()