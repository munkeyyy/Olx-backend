"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _user = _interopRequireDefault(require("./routers/user.router"));
var _category = _interopRequireDefault(require("./routers/category.router"));
var _subcategory = _interopRequireDefault(require("./routers/subcategory.router"));
var _brand = _interopRequireDefault(require("./routers/brand.router"));
var _product = _interopRequireDefault(require("./routers/product.router"));
var _favourite = _interopRequireDefault(require("./routers/favourite.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use(_express["default"].json()); //body-parser (to read request body data)

app.use('/uploads', _express["default"]["static"]('uploads'));
app.use((0, _cors["default"])());
var port = 8001;
_mongoose["default"].connect("mongodb://localhost:27017/OLX").then(function () {
  return console.log("DB Connected!");
})["catch"](function (err) {
  return console.log(err);
});
app.listen(port, function () {
  console.log("Server is running on port " + port);
});
app.use(process.env.URL_PREFIX + "users", _user["default"]);
app.use(process.env.URL_PREFIX + "categories", _category["default"]);
app.use(process.env.URL_PREFIX + "sub-categories", _subcategory["default"]);
app.use(process.env.URL_PREFIX + "brands", _brand["default"]);
app.use(process.env.URL_PREFIX + "products", _product["default"]);
app.use(process.env.URL_PREFIX + "favourites", _favourite["default"]);
// app.use(productRouter)