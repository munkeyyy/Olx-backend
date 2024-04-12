import mongoose, { Schema } from "mongoose";
import categoryModel from "./category.model";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  category:{
    type:Schema.Types.ObjectId,
    ref:categoryModel,
    default:null
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
