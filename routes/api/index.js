const router = require("express").Router();
const savedRoutes = require("./saved");

// Saved routes
router.use("/books", savedRoutes);

module.exports = router;
