require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000
app.get("/",(req,res)=>{
res.send("hello there")
})
app.get("/gyan",(req,res)=>{
    res.send("hello there from gyan")
    })

app.listen(process.env.PORT,()=>{
    console.log(`app listening at port ${port}`)
})