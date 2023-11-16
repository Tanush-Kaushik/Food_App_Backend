import express from 'express'
import { point } from '../models/point.js'


export const router= express.Router()

router.post('/create',async(req,res)=>{
    try {
         
        const newPoint = await (new point(req.body)).save()

        res.json({
            newPoint 
        })

    } catch (error) {
        console.log(error)
    }
})


router.get('/getAllPoints',async(req,res)=>{
    try {
        
        const points = await point.find()

        res.json({
            points
        })
        // console.log(points)

    } catch (error) {
        console.log(error)
    }
})