const router = require("express").Router();
const medsRoutes = require("./meds");

// Saved routes
router.use("/meds", medsRoutes);

module.exports = router;
