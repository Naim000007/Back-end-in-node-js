import { Mongoose } from "mongoose";

const subTodoSchema = new Mongoose.Schema({},{timestamps: true})

export const Subtodo = Mongoose.moddel("Subtodo", subTodoSchema)