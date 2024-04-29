import mongoose, { Schema } from "mongoose";
import BrandModel from "./brand.model";
import CategoryModel from "./category.model";
import UserModel from "./user.model"
const ProductSchema = new Schema({
  userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required:true,
    default:null
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: CategoryModel,
    default: null,
  },
  subcategory: {
    type: String,
    required:true,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
    required:true,
  },
  location: {
    type: String,
    default:null,
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
