import { Router } from "express";
import { contentmodel } from "../Schemas/contentschema";
import { Request, Response } from "express";
import { authMiddleware, requestT } from "../Middlewares/authMware";


const contentRouter = Router();

contentRouter.use(authMiddleware)


contentRouter.post("/add", async (req: requestT, res: Response) => {
    const cType: string = req.body.cType;
    const title: string = req.body.title;
    const about: string = req.body.about;
    const link: string = req.body.link;
    const id: string = req.id

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
});

export { contentRouter }
