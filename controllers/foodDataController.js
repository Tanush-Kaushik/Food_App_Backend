import { food_category} from "../models/food_category.js";
import {food_item} from "../models/food_items.js";

export const getFoodData=async(req,res)=>{
    try {
        let foodItemsData = await food_item.find({})
        let foodCategoryData = await food_category.find({})

        res.send([foodItemsData,foodCategoryData])

    } catch (error) {
        console.log(error) 
        res.send('server error')
    }
}