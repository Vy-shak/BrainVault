import { Router } from "express";
import { authMiddleware } from "../Middlewares/authMware";
import { shareModel } from "../Schemas/shareSchema";
import { folderModel } from "../Schemas/folderSchema";
import dotenv from "dotenv"


dotenv.config();


const shareRouter = Router();

//@ts-ignore
shareRouter.use(authMiddleware);

shareRouter.post('/change', async (req, res) => {
    const share: boolean = req.body.share;
    const id: string | undefined = req.id;

    if (!id) {
        res.status(411).send({
            err: "user is not authenticated"
        })
    }

    if (share) {
        const hash: string = "djkfkfjkjngkjngk";

        try {
            await shareModel.create({
                userId: id,
                hash: hash
            })
        } catch (error) {
            res.status(411).send({
                err: "can not create the sharable link",
                error: error
            });
            return
        };

        res.send({
            msg: "sharable link activated",
            hash: hash
        })
    }
    else {
        try {
            await shareModel.deleteOne({
                userId: id
            })
        } catch (error) {
            res.status(411).send({
                err: "can not turn off the sharable link"
            });
            return
        };

        res.send({
            msg: "sharable link de-activated"
        })
    }
});


shareRouter.get('/show/:shareLink', async (req, res) => {
    const shareLink = req.params.shareLink;

    try {
        const item = await shareModel.findOne({
            hash: shareLink
        });

        if (item) {
            try {
                const content = await folderModel.find({
                    userId: item.userId
                });

                res.send({
                    msg: content
                });

            } catch (error) {
                res.send({
                    err: "can not find the content",
                    error: error
                });
                return;
            };

        }

    } catch (error) {
        res.send({
            err: " sorry! this shareble link is no longer active",
            error: error
        });
        return;
    };


});


export { shareRouter };







