import express from 'express'
import bcrypt from 'bcrypt'
import {user} from '../models/user.js'


export const router1 = express.Router()

router1.post('/register',async(req,res)=>{
    try {

        if(await user.findOne({email:req.body.email})){
            return res.json({
                success:false,
                message:'user already exists'
            })
        }
        
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const newUser = await user.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        })
        
        res.json({
            success:true,
            id:newUser._id
        })
        
    } catch (error) {
        console.log(error)
    }
})


router1.post('/login',async(req,res)=>{
    try {
        
        const curUser = await user.findOne({email:req.body.email})
        
        if(!curUser){
            return res.json({
                success:false,
                message:'Register first'
            })
        }

        const validation = await bcrypt.compare(req.body.password,curUser.password)

        if(!validation){
            return res.json({
                success:false,
                message:'Invalid credentials'
            })
        }

        res.json({
            success:true,
            id:curUser._id
        })

    } catch (error) {
        console.log(error)
    }
})


router1.post('/find',async(req,res)=>{
    try {
        
        let user1 = await user.findOne({email:req.body.email})

        res.json({
            success:true,
            name:user1.name
        })
        

    } catch (error) {
        console.log(error)
    }
})

