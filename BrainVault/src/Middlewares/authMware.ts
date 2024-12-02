import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

declare module 'express-serve-static-core' {
    namespace Express {
        interface Request {
            id?: string;
        }
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authtoken'];

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
            return res.status(401).json({
                err: "Invalid token"
            });
        }
    } catch (error) {
        return res.status(401).json({
            err: "Authentication failed",
            details: error
        });
    }
};

export { authMiddleware };