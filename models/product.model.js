import mongoose, { Schema } from "mongoose";
import BrandModel from "./brand.model";
import CategoryModel from "./category.model";
import subcategoyModel from "./subcategoy.model";
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: CategoryModel,
    default: null,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: subcategoyModel,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  location: {
    type: String,
    required: true,
  },
  day:{
    type:String,
    default:null
  },
  thumbnail: {
    type: String,
    default: null,
  },
  images: {
    type: Array,
    default: [],
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


export default mongoose.model("product", ProductSchema);
