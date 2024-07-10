import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/authController.js";

export const router = express.Router()

router.post('/createUser',

    [body('name').isLength({ min: 5 }),
    body('email', 'invalid email').isEmail(),
    body('password', 'invalid password').isLength({ min: 8 })]

    , register)


router.post('/loginUser',

    [body('email', 'invalid email').isEmail(),
    body('password', 'invalid password').isLength({ min: 8 })]

    , login)