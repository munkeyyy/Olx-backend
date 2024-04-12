
import express from "express"
import { addCategory, deleteCategory, getCategories, getSingleCategories, updateCategory } from "../controllers/category.controller"
// import auth from "../middleware/auth.middleware"
const router= express.Router()

router.post("/add-category",  addCategory)
router.get("/get-categories", getCategories)
router.get("/get-category/:category_id", getSingleCategories)
router.put("/update-category/:category_id",  updateCategory)
router.delete("/delete-category/:category_id",  deleteCategory)

export default router