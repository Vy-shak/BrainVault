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
    const linktype: string = req.body.linktype;

    console.log(linktype)

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
    let link: string = req.body.link;
    const id: string = req.id!;

    function Urltoembed(url: string) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|v\/|embed\/|.+&v=))([^&\s?]+)/);

        if (match && match[1]) {
            const videoId = match[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            throw new Error("Invalid YouTube link");
        }
    };

    if (linktype === 'Youtube') {
        link = Urltoembed(link);
    }
    else { link = Urltoembed(link) }

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
