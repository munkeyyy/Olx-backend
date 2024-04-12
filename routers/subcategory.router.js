
import express from "express"
import { addSubCategory, deleteSubCategory, getSubCategories, updateSubCategory } from "../controllers/subacategory.controller"
// import auth from "../middleware/auth.middleware"
const router= express.Router()

router.post("/add-sub-category",  addSubCategory)
router.get("/get-sub-categories", getSubCategories)
router.put("/update-sub-category/:sub_id",  updateSubCategory)
router.delete("/delete-sub-category/:sub_id",  deleteSubCategory)

export default router