const express=require("express");
const app=express()
require("dotenv").config();
PORT=process.env.PORT;
const cors=require("cors");
const bodyparser = require('body-parser');
const mongoose=require("mongoose");
const userRote=require("./Routes/Route")



app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


mongoose.connect(process.env.DBCONNECTION).then((res)=>{
      console.log("Db connected!!!")
})


app.use("/user",userRote)

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})