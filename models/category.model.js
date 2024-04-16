import mongoose from 'mongoose';

const { Schema } = mongoose;

const BrandSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const SubCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: [BrandSchema],
});

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subcategory: [SubCategorySchema],
  status: {
    type: Number,
    default: 1,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('category', CategorySchema);
