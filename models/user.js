import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,  // min:3 max:20
        // unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true  // max:50
    },
    password:{
        type:String,
        require:true, // min:6
    }
},{timestamps:true})

export const user = mongoose.model('User',userSchema)