import { Mongoose } from "mongoose";

const todoSchema = new Mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy :{
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Subtodo"
        }
    ]
}, {timestamps: true})

export const Todo = Mongoose.model("Todo", todoSchema )