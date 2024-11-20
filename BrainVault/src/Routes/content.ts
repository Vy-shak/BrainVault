import { Router } from "express";
import { contentmodel } from "../Schemas/contentschema";
import { Request, Response } from "express";


const contentRouter = Router();


interface contentRequest extends Request {
    body: {
        cType?: string,
        title?: string,
        about?: string,
        link?: string,
        id: string
    }
};



contentRouter.post("/addContent", async (req: contentRequest, res: Response) => {
    const { cType, title, about, link, id } = req.body

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
