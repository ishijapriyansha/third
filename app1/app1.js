const express= require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('Hello from app1')
})

app.listen(5000,()=>{
    console.log("Listening at port 5000!")
})