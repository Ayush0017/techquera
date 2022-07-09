const express = require('express')
const path = require('path')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const userRouter  = require('./express/routers/UserRouter')

const app = express()

app.use(express.static(path.resolve('build')))
app.use(express.json())
app.use(cookieParser())
app.use(expressSession({secret:"universal indore"}))
app.use(fileUpload())

app.use("/user",userRouter)


app.listen(8989,()=>{
    console.log("Server Running : http://localhost:8989")
})