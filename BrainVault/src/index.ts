import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { userRouter } from './Routes/userRoute';
import { folderRouter } from './Routes/folder';
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
app.use('/api/v1/folder', folderRouter);
app.use('/api/v1/share', shareRouter)

app.listen(3000, () => {
    console.log('app started on port 3000')
})
try {
    (async function connectDb() {
        const connect = await mongoose.connect(`mongodb+srv://vyshakn:${process.env.DB_PASS}@cluster0.twxk2.mongodb.net/Brainvault`);
    })()
} catch (error) {
    console.log('mongodb connection failed', (error: Error | null) => {
        console.log(error ? 'db Connection failed' + error : 'Db connected successfully')
    })
}


