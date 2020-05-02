const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../controllers/databaseController.js");

// // API Routes
router.use(apiRoutes);

module.exports = router;
