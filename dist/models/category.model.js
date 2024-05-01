"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var BrandSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});
var SubCategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  brand: [BrandSchema]
});
var CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subcategory: [SubCategorySchema],
  status: {
    type: Number,
    "default": 1
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
});
var _default = exports["default"] = _mongoose["default"].model('category', CategorySchema);