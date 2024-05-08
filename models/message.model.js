import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  recieverId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{timestamps:true});

export default mongoose.model("message", MessageSchema)