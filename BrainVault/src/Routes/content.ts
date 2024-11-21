import { Router } from "express";
import { contentmodel } from "../Schemas/contentschema";
import { Request, Response } from "express";


const contentRouter = Router();




contentRouter.post("/addContent", async (req: Request, res: Response) => {
    const cType: string = req.body.cType;
    const title: string = req.body.title;
    const about: string = req.body.about;
    const link: string = req.body.link;

    try {
        const upload = await contentmodel.create({
            cType: cType,
            title: title,
            about: about,
            link: link
        });

    } catch (error) {
        res.send({
            err: "could not upload your data",
            err1: error
        })
    }
})
