import ProductModel from "../models/product.model";
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("./uploads/product")) {
      cb(null, "./uploads/product");
    } else {
      fs.mkdirSync("./uploads/product");
      cb(null, "./uploads/product");
    }
  },
  filename: function (req, file, cb) {
    // console.log(file);
    const orgname = file.originalname;
    const name = path.parse(orgname).name;
    const ext = path.parse(orgname).ext;
    const unique = Date.now();

    const finalname = name + "-" + unique + ext;

    cb(null, finalname);
  },
});
const upload = multer({ storage: storage });
export const addProduct = (req, res) => {
  try {
    const dataWithImages = upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "images", maxCount: 20 },
    ]);

    dataWithImages(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message });
      const {
        title,
        category,
        brand,
        subcategory,
        description,
        price,
        location,
        userId,
      } = req.body;

      let thumb = null;
      let imgArr = [];
      if (req.files) {
        if (req.files["thumbnail"]) {
          thumb = req.files["thumbnail"][0].filename;
        }
        // console.log(thumb)
        if (req.files["images"]) {
          for (let i = 0; i < req.files["images"].length; i++) {
            const element = req.files["images"][i];
            imgArr.push(element.filename);
          }
        }
      }

      const productData = new ProductModel({
        title: title,
        brand: brand,
        category: category,
        subcategory: subcategory,
        description: description,
        price: price,
        location: location,
        thumbnail: imgArr[0],
        images: imgArr,
        userId: userId,
      });

      productData.day = new Date();
      productData.save();
      if (productData) {
        return res.status(201).json({
          data: productData,
          message: "Product Added Successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  const { search, limit, page, sort } = req.query;
  const skipno = limit * (page - 1);
  try {
    const pipeLine = [
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
    ];
    const rgx = (pattern) => {
      return new RegExp(`.*${pattern}.*`);
    };

    const searchRgx = rgx(search);
    let filter = {};
    let sortField = ["_id", 1];

    if (sort == "htl") {
      sortField = ["price", -1];
    } else if (sort == "lth") {
      sortField = ["price", 1];
    }
    if (search) {
      filter = {
        $or: [
          { title: { $regex: searchRgx, $options: "i" } },
          { description: { $regex: searchRgx, $options: "i" } },
          { "category.title": { $regex: searchRgx, $options: "i" } },
          { "category.subcategory": { $regex: searchRgx, $options: "i" } },
          { "category.brand": { $regex: searchRgx, $options: "i" } },
          // { "subcategory.title": { $regex: searchRgx, $options: "i" } },
          // { "brand.title": { $regex: searchRgx, $options: "i" } },
        ],
      };
      pipeLine.push({ $match: filter });
    }

    if (parseInt(limit) && parseInt(page)) {
      pipeLine.push({ $skip: skipno }, { $limit: parseInt(limit) });
    }
    const productsData = await ProductModel.aggregate(pipeLine);
    // find(filter)
    //   .populate("category")
    //   .populate("subcategory")
    //   .populate("brand");
    // console.log(productsData)
    const currentDate = new Date();
    productsData.forEach((product) => {
      const productDate = new Date(product.day);
      if (currentDate.toDateString() === productDate.toDateString()) {
        // Display "Today" if the product was posted today
        product.day = "Today";
      } else {
        // Display month and date if the product was posted on a previous day
        product.day =
          productDate.toLocaleString("default", { month: "short" }) +
          " " +
          productDate.getDate();
      }
    });
    // console.log(productsData)
    if (productsData) {
      return res.status(200).json({
        data: productsData,
        message: "Products Fetched successfully",
        // filepath:"http://localhost:8001/uploads/product"
      });
    }
    return res.status(400).json({
      message: "Something went wrong!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.product_id;
    const productdata = await ProductModel.findOne({ _id: productId })
      .populate("category")
      .populate("userId");
    // .populate("brand")
    // .populate("subcategory");

    if (productdata) {
      return res.status(200).json({
        data: productdata,
        message: "product fetched successfully",
      });
    }

    return res.status(400).json({
      message: "something went Wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { title, brand, category, description, price, subcategory } =req.body;
    const productId = req.params.product_id;
    const updatedProduct = await ProductModel.updateOne(
      { _id: productId },
      {
        $set: {
          title: title,
          brand: brand,
          category: category,
          subcategory: subcategory,
          description: description,
          price: price,
        },
      }
    );
    if (updatedProduct.acknowledged) {
      return res.status(200).json({
        message: "Product Updated Succesfully",
      });
    }
    return res.status(400).json({
      message: "Something went wrong",
    });
  } catch (error) {
    return res.status(500).josn({
      message: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.product_id;
    const existData = await ProductModel.find({ _id:productId  });

    const deletedProduct = await ProductModel.deleteOne({ _id: productId });
    if (deletedProduct.acknowledged) {
      if (fs.existsSync("./uploads/products/" + existData.thumbnail)) {
        fs.unlinkSync("./uploads/products/" + existData.thumbnail);
      }
      return res.status(200).json({
        message: "Product deleted Succesfully",
      });
    }
    return res.status(400).json({
      message: "Something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
