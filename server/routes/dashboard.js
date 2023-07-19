const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/check");
const dashboardCon = require("../controllers/dashboardCon");

router.get("/dashboard", isLoggedIn, dashboardCon.dashboard);

router.get("/dashboard/item/:id", isLoggedIn, dashboardCon.dashboardViewNote);
router.put("/dashboard/item/:id", isLoggedIn, dashboardCon.dashboardUpdateNote);
router.delete(
  "/dashboard/item-delete/:id",
  isLoggedIn,
  dashboardCon.dashboardDeleteNote
);
router.get("/dashboard/add", isLoggedIn, dashboardCon.dashboardAddNote);
router.post("/dashboard/add", isLoggedIn, dashboardCon.dashboardAddNoteSubmit);
router.get("/dashboard/search", isLoggedIn, dashboardCon.dashboardSearch);
router.post(
  "/dashboard/search",
  isLoggedIn,
  dashboardCon.dashboardSearchSubmit
);

module.exports = router;
