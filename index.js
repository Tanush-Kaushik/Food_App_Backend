import express from "express";
import { config } from "dotenv";
import { mongoDB } from "./db.js";
import { router } from "./routes/points.js";
import { router1 } from "./routes/user.js";

config({path:'./config.env'}) 
mongoDB() 

const app = express()


app.use((req,res,next)=>{ 
    res.setHeader('Access-Control-Allow-Origin',process.env.FRONTEND_URL)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-type,Accept'
    ) 
    next()
})
app.use(express.json())
app.use('/api',router)
app.use('/api',router1)

app.listen(process.env.PORT,()=>{
    console.log('hell')
})