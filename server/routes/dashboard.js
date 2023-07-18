const express = require("express");
const router = express.Router();
const dashboardCon = require("../controllers/dashboardCon");

router.get("/dashboard", dashboardCon.dashboard);

module.exports = router;
