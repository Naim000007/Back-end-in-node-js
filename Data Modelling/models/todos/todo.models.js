import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({}, {timestaps:true})

export const Todo = mongoose.model('Todo', todoSchema)
