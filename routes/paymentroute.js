import express from "express";
import { checkout, paymentVerification } from "../controllers/paymentController.js";

const paymentRouter=express.Router()

paymentRouter.post('/checkout',checkout)
paymentRouter.get('/getKey',(req,res)=>res.json({
    key:process.env.RAZORPAY_ID
}))
paymentRouter.post('/verifyPayment',paymentVerification)

export default paymentRouter;