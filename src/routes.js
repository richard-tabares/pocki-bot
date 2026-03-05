const express = require("express")
const router = express.Router()

const { verifyWebhook, receiveMessage } = require("./controllers/whatsapp.controller")

router.get("/webhook", verifyWebhook)
router.post("/webhook", receiveMessage)

module.exports = router