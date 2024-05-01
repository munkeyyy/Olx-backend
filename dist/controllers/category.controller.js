"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getSingleCategories = exports.getCategories = exports.deleteCategory = exports.addCategory = void 0;
var _category = _interopRequireDefault(require("../models/category.model"));
var _multer = _interopRequireDefault(require("multer"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    if (_fs["default"].existsSync("./uploads/categories")) {
      cb(null, "./uploads/categories");
    } else {
      _fs["default"].mkdirSync("./uploads/categories");
      cb(null, "./uploads/categories");
    }
  },
  filename: function filename(req, file, cb) {
    console.log(file);
    var orgname = file.originalname;
    var name = _path["default"].parse(orgname).name;
    var ext = _path["default"].parse(orgname).ext;
    var unique = Date.now();
    var finalname = name + "-" + unique + ext;
    cb(null, finalname);
  }
});
var upload = (0, _multer["default"])({
  storage: storage
});
var addCategory = exports.addCategory = function addCategory(req, res) {
  try {
    var dataWithImage = upload.single("thumbnail");
    dataWithImage(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          message: err.mesage
        });
      }
      var img = null;
      if (req.file) {
        img = req.file.filename;
      }
      console.log("Request Body:", req.body);
      var _req$body = req.body,
        title = _req$body.title,
        description = _req$body.description,
        subcategory = _req$body.subcategory;
      console.log("Subcategory:", subcategory);
      var categoryData = new _category["default"]({
        title: title,
        description: description,
        thumbnail: img,
        subcategory: []
      });
      if (!Array.isArray(subcategory)) {
        throw new Error("Subcategory field is not an array");
      }
      var _iterator = _createForOfIteratorHelper(subcategory),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var subcat = _step.value;
          var subcatTitle = subcat.title,
            brand = subcat.brand;
          var _subcategory = {
            title: subcatTitle ? subcatTitle : null,
            brand: [] || null
          };

          // Check if brand field exists and is an array
          if (brand) {
            if (Array.isArray(brand)) {
              var _iterator2 = _createForOfIteratorHelper(brand),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var brandItem = _step2.value;
                  if (brandItem && _typeof(brandItem) === 'object') {
                    var brandTitle = brandItem.title;
                    _subcategory.brand.push({
                      title: brandTitle ? brandTitle : null
                    });
                  } else {
                    console.error("Invalid brand data:", brandItem);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else {
              null, _readOnlyError("brand");
              console.error("Brand field is missing or not an array:", brand);
            }
          }
          categoryData.subcategory.push(_subcategory);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      console.log(categoryData.subcategory);
      categoryData.save();
      if (categoryData) {
        return res.status(201).json({
          data: categoryData,
          message: "Category added successfully"
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
var getCategories = exports.getCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var categoriesData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _category["default"].find();
        case 3:
          categoriesData = _context.sent;
          if (!categoriesData) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            data: categoriesData,
            message: "Categories Fetched Sucessfully"
          }));
        case 6:
          return _context.abrupt("return", res.status(400).json({
            message: "Something went wrong"
          }));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0.message
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSingleCategories = exports.getSingleCategories = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var categoryId, categoriesData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          categoryId = req.params.category_id;
          _context2.next = 4;
          return _category["default"].findOne({
            _id: categoryId
          });
        case 4:
          categoriesData = _context2.sent;
          if (!categoriesData) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            data: categoriesData,
            message: "Categories Fetched Sucessfully"
          }));
        case 7:
          return _context2.abrupt("return", res.status(400).json({
            message: "Something went wrong"
          }));
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: _context2.t0.message
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getSingleCategories(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateCategory = exports.updateCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var dataWithImage;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          dataWithImage = upload.single("thumbnail");
          dataWithImage(req, res, /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err) {
              var categoryId, _req$body2, title, description, existData, thumb, updatedCategory;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!err) {
                      _context3.next = 2;
                      break;
                    }
                    return _context3.abrupt("return", res.status(400).json({
                      message: err.mesage
                    }));
                  case 2:
                    categoryId = req.params.category_id;
                    _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
                    _context3.next = 6;
                    return _category["default"].findOne({
                      _id: categoryId
                    });
                  case 6:
                    existData = _context3.sent;
                    thumb = existData.thumbnail;
                    if (req.file) {
                      thumb = req.file.filename;
                      if (_fs["default"].existsSync("./uploads/categories/" + existData.thumbnail)) {
                        _fs["default"].unlinkSync("./uploads/categories/" + existData.thumbnail);
                      }
                    }
                    _context3.next = 11;
                    return _category["default"].updateOne({
                      _id: categoryId
                    }, {
                      $set: {
                        title: title,
                        description: description,
                        thumbnail: thumb
                      }
                    });
                  case 11:
                    updatedCategory = _context3.sent;
                    if (!updatedCategory.acknowledged) {
                      _context3.next = 14;
                      break;
                    }
                    return _context3.abrupt("return", res.status(200).json({
                      message: "Category Updated Successfully"
                    }));
                  case 14:
                    return _context3.abrupt("return", res.status(400).josn({
                      message: "something went wrong"
                    }));
                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x7) {
              return _ref4.apply(this, arguments);
            };
          }());
          _context4.next = 8;
          break;
        case 5:
          _context4.prev = 5;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0.message
          }));
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 5]]);
  }));
  return function updateCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteCategory = exports.deleteCategory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var categoryId, existData, deletedCategory;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          categoryId = req.params.category_id;
          _context5.next = 4;
          return _category["default"].findOne({
            _id: categoryId
          });
        case 4:
          existData = _context5.sent;
          _context5.next = 7;
          return _category["default"].deleteOne({
            _id: categoryId
          });
        case 7:
          deletedCategory = _context5.sent;
          if (!deletedCategory.acknowledged) {
            _context5.next = 11;
            break;
          }
          if (_fs["default"].existsSync("./uplaods/categories/" + existData.thumbnail)) {
            _fs["default"].unlinkSync("./uploads/categories/" + existData.thumbnail);
          }
          return _context5.abrupt("return", res.status(200).json({
            message: "Category deleted Successfully"
          }));
        case 11:
          return _context5.abrupt("return", res.status(400).josn({
            message: "something went wrong"
          }));
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: _context5.t0.message
          }));
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return function deleteCategory(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();