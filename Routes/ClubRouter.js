var router = require("express").Router();
const ClubService = require("../Services/ClubService");
router.get("/check", ClubService.getClub);



module.exports = router;
