import { Request, Response, NextFunction } from "express";
import jwt, { decode, JwtPayload, PublicKey } from "jsonwebtoken"
import dotenv from 'dotenv';
import { string } from "zod";

dotenv.config()

interface requestT extends Request {
    id?: string
}


const authMiddleware = (req: requestT, res: Response, next: NextFunction) => {

    const header = req.headers['authtoken'];

    const decoded: string | JwtPayload = jwt.verify(header as string, process.env.JWT_SECRET!);

    if (!decoded) {
        return res.send({
            err: "you are not logined in"
        })
    };


    if (typeof decoded === "object" && decoded.id) {
        req.id = decoded.id;
    }
    else {
        console.log('decoded type is not object')
    };

    next();

}