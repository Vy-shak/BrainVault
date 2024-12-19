import { Router } from "express";
import mongoose from "mongoose";
import { folderModel } from "../Schemas/folderSchema";
import { Request, Response } from "express";
import { authMiddleware } from "../Middlewares/authMware";
import { string } from "zod";


const folderRouter = Router();

declare module 'express-serve-static-core' {
    namespace Express {
        interface Request {
            id?: string;
        }
    }
}

interface body {
    title: string,
    level: number,
    link: string
}



//@ts-ignore
folderRouter.use(authMiddleware);


interface folderT {
    folderName: string,
    parentId: string,
    level: number,
    child?: []
}

folderRouter.post("/createFolder", async (req: Request, res: Response) => {

    const { folderName, level, parentId, child }: folderT = req.body;
    const userId = req.id;



    try {
        const query = { _id: parentId, userId: userId };
        const update = { $set: { folderName: folderName, level: level } };

        if (query._id) {
            const update2 = await folderModel.updateOne(query, update);
            res.send({
                msg: "folder created",
                details: parentId
            })
        }
        else {
            const create = await folderModel.create({ folderName: folderName, level: level, userId: userId });
            res.send({
                msg: "folder created",
                details: create
            })
        }


    } catch (error) {
        res.send({
            err: "sorry not able to create the file",
            err1: error
        });
    };

});



folderRouter.get("/getFolder", async (req: Request, res: Response) => {
    const parentId = req.body.parentId;
    const userId = req.id

    try {
        const upload = await folderModel.find({
            _id: parentId, userId
        });


        res.send({
            msg: `got the folder`,
            details: upload
        })

    } catch (error) {
        res.send({
            err: "sorry not able to get the file",
            err1: error
        })
    };

});











folderRouter.post("/delete", async (req: Request, res: Response): Promise<void> => {
    const { level, contentId } = req.body;
    const id: string = req.id!;

    try {
        const upload = await folderModel.deleteOne({
            level: level,
            _id: contentId,
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




export { folderRouter }
