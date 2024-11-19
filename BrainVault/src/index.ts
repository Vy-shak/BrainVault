import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { userRouter } from './Routes/userRoute';

const app = express();

dotenv.config();


app.get('/home', (req, res) => {
    res.send({
        msg: 'landing page'
    })
})

app.use('/api/v1', userRouter);


app.listen(3000, () => {
    console.log('app started on port 3000')
})


try {
    mongoose.connect(`mongodb+srv://vyshakn:${process.env.DB_PASS}@cluster0.twxk2.mongodb.net/Brainvault`)
} catch (error) {
    console.log('mongodb connection failed', (error: Error | null) => {
        console.log(error ? 'db Connection failed' + error : 'Db connected successfully')
    })
}


