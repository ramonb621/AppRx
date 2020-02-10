const router = require("express").Router();
const medController = require("../../controllers/medController");
const axios = require("axios");

router.route("/")
  .get(medController.findAll)
  .post(medController.create);

router
  .route("/:id")
  .get(medController.findById)
  .put(medController.update)
  .delete(medController.remove);

module.exports = router;