import { Schema, model } from "mongoose";


const userSchema = new Schema({
    fullname: { type: String },
    username: { type: String, unique: true },
    password: { type: String, required: true }
});


const userModel = model('user', userSchema);

export { userModel }