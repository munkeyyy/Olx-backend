import mongoose, { Schema } from "mongoose";

const CoversationSchema = new Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
        default:[]
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("conversation", CoversationSchema)
