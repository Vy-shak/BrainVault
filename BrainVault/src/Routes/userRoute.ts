import express from "express";
import { userModel } from "../Schemas/userSchema";
import mongoose, { Types } from "mongoose";
import jwt from "jsonwebtoken"
import z from 'zod';
import bcrypt from "bcrypt"

const app = express()

const userRouter = express.Router();


userRouter.post('/signup', async (req: any, res: any) => {
    type bodyT = {
        username: string,
        fullname: string,
        password: string
    };

    const { username, fullname, password }: bodyT = req.body;

    const hashPass = bcrypt.hash(password, 5, (err, hash) => {
        if (!hash) {
            return res.send({
                err: "hashing failed",
                err1: err
            })
        }
    })

    try {
        const addData = await userModel.create({
            username: username,
            fullname: fullname,
            password: hashPass
        });
    } catch (err) {
        return res.send({
            err: "error in adding data to db",
            err1: err
        })
    }


    return res.send({
        msg: 'signup page'
    });

});



userRouter.post('/signin', async (req, res) => {

    interface bodyT {
        username: string,
        password: string
    };

    interface checkT extends bodyT {
        _id: Types.ObjectId,
        fullname: string
    }

    const { username, password }: bodyT = req.body;

    try {
        const check: checkT | null = await userModel.findOne({
            username: username
        });

        if (check) {
            const token = jwt.sign(check._id, 'kjskjsfdf',)
        }
    } catch (error) {

    }
});


export { userRouter };

