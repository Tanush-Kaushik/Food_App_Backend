import express from "express";
import { getFoodData } from "../controllers/foodDataController.js";

export const router2 = express.Router()

router2.post('/foodData',getFoodData)
