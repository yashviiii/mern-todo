import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: false,
            default: false,
        },
        // user: {
        //     type: Schema.type.ObjectId,
        //     ref: 'User',
        //     required: true
        // }
    }, {timestamps:true}
)

export default mongoose.model('Task',taskSchema);