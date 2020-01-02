const router = require("express").Router();
const searchRoutes = require("./search");

// Saved routes
router.use("/search", searchRoutes);

module.exports = router;
