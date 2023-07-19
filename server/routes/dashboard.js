const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/check");
const dashboardCon = require("../controllers/dashboardCon");

router.get("/dashboard", isLoggedIn, dashboardCon.dashboard);

module.exports = router;
