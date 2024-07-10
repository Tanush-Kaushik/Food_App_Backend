import { instance } from "../index.js";
import crypto from "crypto";
import { payments } from "../models/paymentDetails.js";


export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR"
        };
        const order = await instance.orders.create(options);

        res.json({
            success: 1,
            order
        })
    } catch (error) {
        res.send('payment error')
    }
}


export const paymentVerification = async (req, res) => {

    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET).update(body.toString()).digest("hex");

        if (expectedSignature === razorpay_signature) {

            await payments.create({
                razorpay_payment_id,
                razorpay_order_id, 
                razorpay_signature
            })

            res.redirect(process.env.FRONTEND_URL+`?ref=${razorpay_payment_id}`)
        }
        else {
            res.send('Invalid payment')
        }
    } catch (error) {
        res.send('payment error')
    }
}