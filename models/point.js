import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:false
    }, 
    title:{ 
        type:String, 
        require:true ,
        min:3
    },
    desc:{
        type:String,
        require:true,
        min:3
    },
    rating:{
        type:Number,
        require:true,
        min:0,
        max:5
    },
    lat:{
        type:Number,
        require:true
    },
    lon:{
        type:Number,
        require:true
    }
},{timestamps:true})

export const point = mongoose.model('Point',pointSchema) 