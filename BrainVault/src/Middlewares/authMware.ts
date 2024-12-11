import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['token'];

    try {
        if (!header) {
            return res.status(401).json({
                err: "No authentication token provided"
            });
        }

        const decoded = jwt.verify(header as string, process.env.JWT_SECRET!);

        if (typeof decoded === 'object' && decoded.id) {
            req.id = decoded.id;
            next();
        } else {
            res.status(401).send({
                err: "Invalid token"
            });
            return
        }
    } catch (error) {
        res.status(401).send({
            err: "Authentication failed",
            details: error
        });
        return
    }
};

export { authMiddleware };