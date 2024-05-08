import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js"

const router= express.Router()


router.post("/send/:recId", sendMessage)
router.get("/get/:chatId", getMessages)


export default router