import mongoose, { model, Mongoose, Schema, Types } from "mongoose";
import { string } from "zod";


const contentSchema = new Schema({
    cType: { type: string },
    title: { type: string },
    about: { type: string },
    link: { type: string },
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
    tag: [{ type: mongoose.Types.ObjectId }]
});


export const contentmodel = model('content', contentSchema)