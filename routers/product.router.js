import express from "express"
import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from "../controllers/product.controller"
// import auth from "../middleware/auth.middleware"

const router= express.Router()


router.post("/add-product", addProduct)
router.get("/get-products", getProducts)
router.get("/get-products/:product_id", getSingleProduct)
router.put("/update-product/:product_id", updateProduct)
router.delete("/delete-product/:product_id", deleteProduct)

export default router