import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
export const user = mongoose.model('user', schema);



// const food_itemsSchema = new mongoose.Schema({
//     CategoryName: String,
//     name: String,
//     img: String,
//     description: String,
//     options: {
//         half: Number,
//         full: Number
//     }
// })
// export const food_item = mongoose.model('food_item',food_itemsSchema)

 

// const foodCategorySchema = new mongoose.Schema({
//     CategoryName:String
// })
// export const food_category = mongoose.model('food_category',foodCategorySchema)


// const orderSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     order_data:{
//         type:Array,
//         required:true
//     }
// })
// export const orders = mongoose.model('orders',orderSchema)
