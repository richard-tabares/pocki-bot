const express = require("express")
const router = express.Router()

const { verifyWebhook, receiveMessage } = require("./controllers/whatsapp.controller")

router.get("/dolar", verifyWebhook)
router.post("/dolar", receiveMessage)

module.exports = router