import mongoose, { Types } from "mongoose";
import { Schema, model } from "mongoose";
import { string } from "zod";


const shareSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, unique: true },
    hash: { type: String, unique: true }
});


const shareModel = model("share", shareSchema);


export { shareModel };



