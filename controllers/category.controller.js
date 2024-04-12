import CategoryModel from "../models/category.model";

import multer from "multer";
import fs from "fs";
import path from "path";
import categoryModel from "../models/category.model";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("./uploads/categories")) {
      cb(null, "./uploads/categories");
    } else {
      fs.mkdirSync("./uploads/categories");
      cb(null, "./uploads/categories");
    }
  },
  filename: function (req, file, cb) {
    console.log(file);
    const orgname = file.originalname;
    const name = path.parse(orgname).name;
    const ext = path.parse(orgname).ext;
    const unique = Date.now();

    const finalname = name + "-" + unique + ext;

    cb(null, finalname);
  },
});
const upload = multer({ storage: storage });
export const addCategory = (req, res) => {
  try {
    const dataWithImage = upload.single("thumbnail");

    dataWithImage(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          message: err.mesage,
        });
      }
      let img = null;
      if (req.file) {
        img = req.file.filename;
      }
      const { title, description } = req.body;
      const categoryData = new CategoryModel({
        title: title,
        description: description,
        thumbnail: img,
      });
      categoryData.save();
      if (categoryData) {
        return res.status(201).json({
          data: categoryData,
          message: "Category added successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categoriesData = await CategoryModel.find();
    if (categoriesData) {
      return res.status(200).json({
        data: categoriesData,
        message: "Categories Fetched Sucessfully",
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

export const getSingleCategories = async (req, res) => {
  try {
    const categoryId = req.params.category_id;

    const categoriesData = await CategoryModel.findOne({ _id: categoryId });
    if (categoriesData) {
      return res.status(200).json({
        data: categoriesData,
        message: "Categories Fetched Sucessfully",
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

export const updateCategory = async (req, res) => {
  try {
    const dataWithImage = upload.single("thumbnail");
    dataWithImage(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: err.mesage,
        });
      }

      const categoryId = req.params.category_id;
      const { title, description } = req.body;
      const existData = await categoryModel.findOne({ _id: categoryId });
      let thumb = existData.thumbnail;
      if (req.file) {
        thumb = req.file.filename;
        if (fs.existsSync("./uploads/categories/" + existData.thumbnail)) {
          fs.unlinkSync("./uploads/categories/" + existData.thumbnail);
        }
      }

      const updatedCategory = await CategoryModel.updateOne(
        { _id: categoryId },
        { $set: { title: title, description: description, thumbnail: thumb } }
      );
      if (updatedCategory.acknowledged) {
        return res.status(200).json({
          message: "Category Updated Successfully",
        });
      }
      return res.status(400).josn({
        message: "something went wrong",
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const existData = await categoryModel.findOne({ _id: categoryId });

    const deletedCategory = await CategoryModel.deleteOne({ _id: categoryId });
    if (deletedCategory.acknowledged) {
      if (fs.existsSync("./uplaods/categories/" + existData.thumbnail)) {
        fs.unlinkSync("./uploads/categories/" + existData.thumbnail);
      }
      return res.status(200).json({
        message: "Category deleted Successfully",
      });
    }
    return res.status(400).josn({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
