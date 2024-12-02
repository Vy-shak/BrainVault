// import { Router } from "express";
// import { authMiddleware } from "../Middlewares/authMware";
// import {tagSchema}

// declare module 'express' {
//     interface Request {
//         id?: string
//     }
// }

// const tagRouter = Router()
// // @ts-ignore

// tagRouter.use(authMiddleware)


// tagRouter.post('add', (req, res) => {
//     // @ts-ignore
//     const id: string = req.id;
//     const tag: string = req.body.tag;


//     try {
//         const createTag = tagModel.create({
//             tag: tag
//         });

//     } catch (err) {
//         res.status(500).send({
//             error: "can not create tag",
//             details: err
//         })
//     };

//     res.status(201).send({
//         msg: "tag created success fully"
//     })
// });


// tagRouter.get('show', async (req, res): Promise<any> => {
//     // @ts-ignore

//     const tag: string = req.body.tag;

//     try {
//         const createTag = await tagModel.find({});

//     } catch (err) {
//         return res.status(500).send({
//             error: "can not create tag",
//             details: err
//         })
//     };

//     res.status(201).send({
//         msg: "tag created success fully",
//         tag: tag
//     });

// });


// tagRouter.delete("/delete", async (req, res): Promise<any> => {
//     const tag: string = req.body.tag;

//     try {
//         const deleteTag = await tagModel.deleteMany({
//             tag: tag
//         });

//     } catch (error) {
//         return res.send({
//             error: error,
//             details: error
//         })
//     };

//     res.status(500).send({
//         msg: "tag deleted sucessfully"
//     })
// });

// export { tagRouter };