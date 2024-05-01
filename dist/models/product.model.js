"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _brand = _interopRequireDefault(require("./brand.model"));
var _category = _interopRequireDefault(require("./category.model"));
var _user = _interopRequireDefault(require("./user.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ProductSchema = new _mongoose.Schema({
  userId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: _user["default"],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true,
    "default": null
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: _category["default"],
    "default": null
  },
  subcategory: {
    type: String,
    required: true,
    "default": null
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    "default": null,
    required: true
  },
  location: {
    type: String,
    "default": null,
    required: true
  },
  day: {
    type: String,
    "default": null
  },
  thumbnail: {
    type: String,
    "default": null
  },
  images: {
    type: Array,
    "default": []
  },
  status: {
    type: Number,
    "default": 1
  },
  created_at: {
    type: Date,
    "default": Date.now()
  }
});
var _default = exports["default"] = _mongoose["default"].model("product", ProductSchema);