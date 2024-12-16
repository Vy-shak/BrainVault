import { Router, Response, Request } from "express";
import { userModel } from "../Schemas/userSchema";
import mongoose, { Types } from "mongoose";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { inputValidation } from "../Middlewares/zodValidation";
import bcrypt from "bcrypt"

const userRouter = Router();

dotenv.config();



userRouter.post('/signup', async (req: Request, res: Response): Promise<void> => {

    const username: string = req.body.username;
    const password: string = req.body.password;
    const fullname: string = req.body.fullname;


    const inputVal = inputValidation.safeParse({ username, password, fullname })

    console.log("one", username, 'two', password, 'three', fullname)


    if (!password) {
        res.status(401).send({
            err: "password is not correct"
        });
        return
    };

    if (inputVal.success) {
        const checkdupli = await userModel.findOne({
            username: username
        });

        if (checkdupli) {
            res.send({
                err: "this username is taken"
            });
            return
        }
    }
    else {
        res.send({
            msg: "input Validation error"
        });
        return
    }




    const hashPass = await bcrypt.hash(password, 5);
    console.log(hashPass)

    try {
        const addData = await userModel.create({
            username: username,
            fullname: fullname,
            password: hashPass
        });
    } catch (err) {
        res.status(406).send({
            err: "error in adding data to db",
            err1: err
        });
        return
    }

    res.send({
        msg: 'signup done'
    });
    return

});



userRouter.post('/signin', async (req: any, res: any) => { //fix any

    interface bodyT {
        username: string,
        password: string
    };

    interface checkT extends bodyT {
        _id: mongoose.Types.ObjectId,
        fullname: string
    }

    const { username, password }: bodyT = req.body;
    console.log(username, password)

    let secret: string = process.env.JWT_SECRET!;

    try {
        const check: checkT | null = await userModel.findOne({
            username: username,
        });

        if (!check) {
            res.status(411).send({
                err: "bad credential"
            });
            return
        }

        console.log(check)

        console.log(check)
        if (check) {
            const passCheck = await bcrypt.compare(password, check.password);
            if (!passCheck) {
                res.send({
                    err: "wrong password"
                })
            }
        }

        if (check && secret) {
            const token = jwt.sign({ id: check._id }, secret);

            if (token) {
                return res.send({
                    msg: "done the jwt generation",
                    token: token
                })
            }
            else {
                return res.status(406).send({
                    msg: "jwt generation failed",
                })
            }

        }
    } catch (err) {
        return res.status(406).send({
            err0: "Wrong credential",
            err1: err
        })
    }
});


export { userRouter };

