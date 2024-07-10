import mongoose from "mongoose";


const food_itemsSchema = new mongoose.Schema({
    CategoryName: String,
    name: String,
    img: String,
    description: String,
    options: {
        half: Number,
        full: Number
    }
})
export const food_item = mongoose.model('food_item',food_itemsSchema)