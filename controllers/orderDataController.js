import { orders } from "../models/order.js";
import { mailer } from "../utility/mail.js";
import { user } from "../models/User.js";

export const placeOrder=async(req,res)=>{
    const { order_data, email, order_date } = req.body

    let data = order_data 
    await data.splice(0, 0, { order_date })

    let id = await orders.findOne({ email })
    let client = await user.findOne({ email })

    if (!id) {
        try {
            mailer(email);
            await orders.create({
                email,
                order_data: [data]
            }).then(() => res.json({
                success: true,
                message: 'user data created',
                name: client.name
            }))

        } catch (error) {
            console.log(error.message)
            res.send('Server error in creating user data')
        }
    }
    else {
        try {
            mailer(email);
            await orders.findOneAndUpdate({ email }, {
                $push: { order_data: data }
            }).then(() => {
                res.send({
                    success: true,
                    message: 'user data updated',
                    name: client.name
                })
            })
        } catch (error) {
            console.log(error.message)
            res.send('Server error in updating user data')
        }
    }
}


export const getOrderHistory=async(req,res)=>{
    try {
        let data = await orders.findOne({ email: req.body.email })

        if(data){
            res.json({ orderData: data, success:true })
        }
        else{
            res.json({success:false})
        }

    } catch (error) {
        console.log(error.message)
        res.send('Server error in finding user data')
    }
}
