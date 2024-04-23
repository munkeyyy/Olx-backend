import FavouriteModel from "../models/favourites.model";
import UserModel from "../models/user.model";
import ProductModel from "../models/product.model";

export const addFav = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const existItem = await FavouriteModel.findOne({
      userId: userId,
      productId: productId,
    });
    if (existItem) {
      return res.status(200).json({
        message: "Item Already added to my Favourites",
      });
    } else {
      const existProduct = await ProductModel.findOne({ _id: productId });
      console.log(existProduct)
      if (existProduct) {
        const adsData = await FavouriteModel.create({
          userId: userId,
          productId: productId,
          title: existProduct.title,
          image: existProduct.thumbnail,
          price: existProduct.price,
        });
        console.log(adsData)
        if (adsData) {
          return res.status(200).json({
            data: adsData,
            message: "Item added to favourites successfully.",
          });
        }
      }
    }
    return res.status(400).json({
      message: "Something went wrong.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getFav = async (req, res) => {
  try {
    const userId = req.params.userId;
    const favData = await FavouriteModel.find({ userId: userId });
    console.log("data",favData)
    if (favData) {
      return res.status(200).json({
        data: favData,
        message: "Items Fetched Successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const removeFav = async (req, res) => {
  try {
    const favId = req.params.favId;
    const deleteItem = await FavouriteModel.deleteOne({ _id: favId });
    if (deleteItem.acknowledged) {
      return res.status(200).json({
        message: "Item deleted",
      });
    }
    return res.status(400).json({
      message: "Something went wrong.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
