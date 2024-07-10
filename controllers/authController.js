import { user } from "../models/User.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export const register=async(req,res)=>{

    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json(errors)
        }

        const { name, location, email, password } = req.body

        if(await user.findOne({email})){
            return res.json({
                success:false,
                message:'User already exists'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        try {

            await user.create({
                name,
                location,
                email,
                password: hashedPassword
            })

            res.json({
                message: 'user created successfully',
                success: true
            })

        } catch (error) {
            console.log(error)
            res.json({
                message: 'some error occured',
                success: false
            })
        }
}

export const login=async(req,res)=>{

    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json(errors)
        }

        try {
            const { email, password } = req.body

            let userData = await user.findOne({ email })

            if (!userData) {
                return res.json({
                    success:false,
                    message: 'Sign up first'
                })
            }

            const passwordCompare = await bcrypt.compare(password, userData.password)

            const data = {
                user: {
                    id: userData.id
                }
            }

            const jwtSecret = process.env.JWT_SECRET_KEY

            const authToken = jwt.sign(data,jwtSecret)

            if (!passwordCompare) {
                return res.json({
                    success:false,
                    message: 'Invalid credentials'
                })
            }

            return res.json({
                message: 'login successful',
                success: true,
                authToken
            })

        } catch (error) {
            console.log(error)
            res.json({
                message: 'unable to login due to error',
                success: false
            })
        }
}