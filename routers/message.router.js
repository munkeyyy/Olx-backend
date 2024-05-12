import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js"
import auth from "../middleware/auth.middleware.js"

const router= express.Router()


router.post("/send/:recId",auth, sendMessage)
router.get("/get/:chatId",auth, getMessages)


export default router