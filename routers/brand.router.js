import express from "express"
import { addBrand, deleteBrand, getBrands, getSingleBrand, updateBrand } from "../controllers/brand.controller"
const router= express.Router()


router.post("/add-brand", addBrand)
router.get("/get-brands", getBrands)
router.get("/get-brands/:brand_id", getSingleBrand)
router.put("/update-brand/:brand_id",  updateBrand)
router.delete("/delete-brand/:brand_id",  deleteBrand)

export default router