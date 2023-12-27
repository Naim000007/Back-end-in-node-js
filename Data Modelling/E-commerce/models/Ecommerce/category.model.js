import { Mongoose } from "mongoose";

const categorySchema = new Mongoose.Schema({
    name: { type: String, required: true },
}, {timestamps: true})

export const category = Mongoose.model("category",categorySchema )