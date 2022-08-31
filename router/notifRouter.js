const express = require("express")
const router = express.Router()
const notifController = require("../controller/notifController.js");


router.post("/transaction/:id", notifController.getNotifTransaction)
router.post("/", notifController.postNotifMulticast)



module.exports = router;