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


contentRouter.get("/show", async (req: Request, res: Response) => {
    const userId = req.id;

    try {
        const data = await contentmodel.find({
            userId: userId
        });

        if (data) {
            res.send({
                msg: "got data successfully",
                details: data
            })
        }
        else {
            res.status(411).send({
                msg: "no data present"
            });
            return
        }
    } catch (error) {
        res.status(411).send({
            err: "can not fetch data",
            details: error
        })
    }
})


contentRouter.post("/add", async (req: Request, res: Response) => {
    const linktype: string = req.body.linktype;
    const linkname: string = req.body.linkname;
    const about: string = req.body.about;
    const link: string = req.body.link;
    const id: string = req.id!;

    try {
        const upload = await contentmodel.create({
            linktype: linktype,
            linkname: linkname,
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
