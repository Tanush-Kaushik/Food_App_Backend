import express from 'express'
import {mongoDB} from './db.js'
import { router } from './routes/User.js'
import { router2 } from './routes/FoodData.js'
import { router3 } from './routes/OrderData.js'
import { config } from 'dotenv';
import cors from "cors";
import Razorpay from "razorpay"
import paymentRouter from './routes/paymentroute.js'

config({path:'./config.env'}) 

const app = express()
const port = process.env.PORT

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',process.env.FRONTEND_URL)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-type,Accept'
    )
    next()
})
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoDB()

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
}); 

app.use('/api',router)
app.use('/api',router2)
app.use('/api',router3)
app.use('/api',paymentRouter)
 
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})

