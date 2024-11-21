import mongoose, { model, Mongoose, Schema, Types } from "mongoose";
import { string } from "zod";


const contentSchema = new Schema({
    cType: { type: String },
    title: { type: String },
    about: { type: String },
    link: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
    tag: [{ type: mongoose.Types.ObjectId, ref: 'tag' }]
});


export const contentmodel = model('content', contentSchema)