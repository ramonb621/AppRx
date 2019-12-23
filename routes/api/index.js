const router = require("express").Router();
const savedRoutes = require("./saved");

// Saved routes
router.use("/saved", savedRoutes);

module.exports = router;
