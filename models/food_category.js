import mongoose from "mongoose";


const foodCategorySchema = new mongoose.Schema({
    CategoryName:String
})
export const food_category = mongoose.model('food_category',foodCategorySchema)