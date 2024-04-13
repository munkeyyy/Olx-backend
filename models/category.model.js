import mongoose, { Schema } from "mongoose";


const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    default: null,
  },
  status: {
    type: Number,
    default: 1,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("category", CategorySchema);
