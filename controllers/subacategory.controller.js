import SubCategorySchema from "../models/subcategoy.model";

export const addSubCategory = (req, res) => {
  try {
    // console.log(req.file)

    const { title, category } = req.body;

    const subData = new SubCategorySchema({
      title: title,
      category: category,
    });
    subData.save();
    if (subData) {
      return res.status(201).json({
        data: subData,
        message: "subcategory added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const subData = await SubCategorySchema.find();
    if (subData) {
      return res.status(200).json({
        data: subData,
        message: "subcategories fetched successfully",
      });
    }
    return res.status(400).json({
      message: "something went worng",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getSingleSubCategory = async (req, res) => {
  try {
    const subId = req.params.sub_id;

    const subData = await SubCategorySchema.findOne({ _id: subId });
    if (subData) {
      return res.status(200).json({
        data: subData,
        message: "sub fetched successfully",
      });
    }
    return res.status(400).json({
      message: "something went worng",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const { title, category } = req.body;
    const subId = req.params.sub_id;

    const updatedSub = await SubCategorySchema.updateOne(
      { _id: subId },
      { $set: { title: title, category: category } }
    );
    if (updatedSub.acknowledged) {
      return res.status(200).json({
        // data:updatedBrand,
        message: "subcategory Updated Sucessfully",
      });
    }
    return res.status(400).json({
      message: "something went worng",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const subId = req.params.sub_id;

    const deletedsub = await SubCategorySchema.deleteOne({ _id: subId });
    if (deletedsub.acknowledged) {
      es.status(200).json({
        message: "subcategory Data deleted successfully",
      });
    }
    return res.status(400).json({
      message: "something went worng",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
