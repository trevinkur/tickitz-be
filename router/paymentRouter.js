const express = require("express");
const paymentMethodController = require("../controller/paymentMethodController");
const router = express.Router()



router.get("/", paymentMethodController.getAllPayment)


module.exports = router;