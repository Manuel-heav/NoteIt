const express = require("express");
const router = express.Router();
const mainCon = require("../controllers/mainCon");

router.get("/", mainCon.home);
router.get("/about", mainCon.about);
router.get("/features", mainCon.features);
router.get("/faq", mainCon.faq);

module.exports = router;
