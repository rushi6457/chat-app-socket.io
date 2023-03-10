const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoute")
const connect = require('./config/db');
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors({origin:true,credentials:true}))
app.use(express.urlencoded({extended:true}))

app.use("/",userRoute)

app.use("/",()=>res.send("HELLO"))
app.listen(process.env.PORT, async()=>{
    await connect()
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
})
