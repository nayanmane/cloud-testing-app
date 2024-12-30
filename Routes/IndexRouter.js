var express = require("express");
var router = express.Router();

const ClubRouter=require("./ClubRouter")

router.use("/check-service",ClubRouter)

module.exports = router;
