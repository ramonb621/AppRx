const router = require("express").Router();
const searchController = require("../../controllers/searchController");
const axios = require("axios");

// router.route("/")
//   .get(searchController.findAll)
//   .post(saveController.create);

router.get("/search/meds", (req, res) => {
    console.log(req);
    console.log("I'm reaching the back!");
    axios.get("https://api.fda.gov/drug/label.json?search=dosage_and_administration:" + { params: { query: query } } + "&limit=5")
    .then(({ data: { results } }) => res.json(results))
    .then(res => console.log(res.data))
    .catch(err => res.status(422).json(err));
});

// router
//   .route("/:id")
//   .get(saveController.findById)
//   .delete(saveController.remove);

module.exports = router;