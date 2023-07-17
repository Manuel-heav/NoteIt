const express = require("express");
const router = express.Router();
const mainCon = require("../controllers/mainCon");

router.get("/", mainCon.home);
router.get("/about", mainCon.about);

module.exports = router;
