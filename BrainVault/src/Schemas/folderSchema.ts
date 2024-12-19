import mongoose, { model, Mongoose, Schema, Types } from "mongoose";
import { string } from "zod";


const folderSchema = new Schema({
    folderName: { type: String, required: true, },
    level: { type: Number },
    link: { type: mongoose.Types.ObjectId, ref: 'links' },
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
});


export const folderModel = model('folder', folderSchema)