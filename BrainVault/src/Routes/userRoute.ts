import express from "express";

const app = express()

const userRouter = express.Router();


userRouter.post('/signup', (req, res) => {
    res.send({
        msg: 'signup page'
    })
});




userRouter.post('/signin', (req, res) => {
    res.send({
        msg: 'signin page'
    })
});


export { userRouter }
