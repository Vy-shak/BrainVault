import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { userRouter } from './Routes/userRoute';
import { contentRouter } from './Routes/content';
import { shareRouter } from './Routes/Share';
import cors from "cors"

const app = express();
app.use(cors())

app.use(express.json())

dotenv.config();


app.get('/home', (req, res) => {
    res.send({
        msg: 'landing page'
    })
})

app.use('/api/v1/user', userRouter);
app.use('/api/v1/content', contentRouter);
app.use('/api/v1/share', shareRouter)

app.listen(3000, () => {
    console.log('app started on port 3000')
})


try {
    mongoose.connect(`mongodb+srv://vyshakn:${'4wjVz7hIUO1ZGznm'}@cluster0.twxk2.mongodb.net/Brainvault`)
} catch (error) {
    console.log('mongodb connection failed', (error: Error | null) => {
        console.log(error ? 'db Connection failed' + error : 'Db connected successfully')
    })
}


