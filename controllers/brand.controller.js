import BrandModel from "../models/brand.model";

export const addBrand = (req, res) => {
  try {
    dataWithImage(req, res, (err) => {
      // console.log(req.file)

      const { title, subcategory } = req.body;

      const brandData = new BrandModel({
        title: title,
        subcategory: subcategory,
      });
      brandData.save();
      if (brandData) {
        return res.status(201).json({
          data: brandData,
          message: "brand added successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getBrands = async (req, res) => {
  try {
    const brandsData = await BrandModel.find();
    if (brandsData) {
      return res.status(200).json({
        data: brandsData,
        message: "Brands fetched successfully",
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
export const getSingleBrand = async (req, res) => {
  try {
       const brandId = req.params.brand_id;

    const brandsData = await BrandModel.findOne({_id:brandId});
    if (brandsData) {
      return res.status(200).json({
        data: brandsData,
        message: "Brands fetched successfully",
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

export const updateBrand = async (req, res) => {
  try {
      const {title, subcategory } = req.body;
      const brandId = req.params.brand_id;
    

      const updatedBrand = await BrandModel.updateOne(
        { _id: brandId },
        { $set: {title:title, subcategory:subcategory } }
      );
      if (updatedBrand.acknowledged) {
        return res.status(200).json({
          // data:updatedBrand,
          message: "Brand Updated Sucessfully",
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

export const deleteBrand = async (req, res) => {
  try {
    const brandId = req.params.brand_id;

    const deletedBrand = await BrandModel.deleteOne({ _id: brandId });
    if (deletedBrand.acknowledged) {
      es.status(200).json({
        message: "Brand Data deleted successfully",
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
