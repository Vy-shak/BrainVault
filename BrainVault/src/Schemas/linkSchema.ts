import mongoose, { model, Mongoose, Schema, Types } from "mongoose";
import { string } from "zod";
import { folderModel } from "./folderSchema";


const linkSchema = new Schema({
    folderId: { type: mongoose.Types.ObjectId, ref: 'folder' },
    link: String,
    title: String
})

export const linkmodel = model('links', linkSchema)