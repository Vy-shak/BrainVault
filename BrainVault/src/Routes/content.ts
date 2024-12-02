import { Router } from "express";
import mongoose from "mongoose";
import { contentmodel } from "../Schemas/contentschema";
import { Request, Response } from "express";
import { authMiddleware } from "../Middlewares/authMware";
import { string } from "zod";


const contentRouter = Router();

declare module 'express-serve-static-core' {
    namespace Express {
        interface Request {
            id?: string;
        }
    }
}



//@ts-ignore
contentRouter.use(authMiddleware)


contentRouter.post("/add", async (req: Request, res: Response) => {
    const cType: string = req.body.cType;
    const title: string = req.body.title;
    const about: string = req.body.about;
    const link: string = req.body.link;
    const id: string = req.id!;

    try {
        const upload = await contentmodel.create({
            cType: cType,
            title: title,
            about: about,
            link: link,
            userId: id
        });

    } catch (error) {
        res.send({
            err: "could not upload your data",
            err1: error
        })
    };

    res.send({
        msg: "content added successfully"
    })
});

contentRouter.post("/delete", async (req: Request, res: Response): Promise<void> => {
    const itemId = req.body;
    const id: string = req.id!;

    try {
        const upload = await contentmodel.deleteOne({
            _id: itemId.contentId,
            userId: id
        });
        console.log(upload)

    } catch (error) {
        res.send({
            err: "unable to delete this document",
            err1: error
        });
        return
    };

    res.send({
        msg: "this document deleted successfully"
    });
});




export { contentRouter }
