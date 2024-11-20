import express from "express";
import { userModel } from "../Schemas/userSchema";
import mongoose, { Types } from "mongoose";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import z, { string } from 'zod';
import bcrypt from "bcrypt"

const app = express()

const userRouter = express.Router();

dotenv.config()

userRouter.post('/signup', async (req: any, res: any) => {
    //zod validation left
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
        msg: 'signup done'
    });

});



userRouter.post('/signin', async (req: any, res: any) => { //fix any

    interface bodyT {
        username: string,
        password: string
    };

    interface checkT extends bodyT {
        _id: Types.ObjectId,
        fullname: string
    }

    const { username, password }: bodyT = req.body;

    let secret: string | undefined | null = process.env.JWT_SECRET;

    try {
        const check: checkT | null = await userModel.findOne({
            username: username
        });

        if (check && secret) {
            const token = jwt.sign({ id: check._id }, secret);

            if (token) {
                return res.send({
                    msg: "done the jwt generation",
                    token: token
                })
            }
            else {
                return res.send({
                    msg: "jwt generation failed",
                })
            }

        }
        else {
            res.send({
                err: "sorry we couldn't find your account"
            })
        }
    } catch (err) {
        return res.send({
            err0: "can not find your acccount",
            err1: err
        })
    }
});


export { userRouter };

