import express from "express";
import { getOrderHistory, placeOrder } from "../controllers/orderDataController.js";

export const router3 = express.Router()

router3.post('/orderData', placeOrder)
router3.post('/myOrders',getOrderHistory)
