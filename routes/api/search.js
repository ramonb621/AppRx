const router = require("express").Router();
const searchController = require("../../controllers/searchController");
const axios = require("axios");

// router.route("/")
//   .get(searchController.findAll)
//   .post(saveController.create);

router.get("/", (req, res) => {
    const query = req.query;
    // console.log({ params: req.query });
    console.log(query)
    console.log("I'm reaching the back!");
    axios.get("https://api.fda.gov/drug/label.json?search=dosage_and_administration:" + query + "&limit=1")
    .then(({ data: { results } }) => console.log(results).json(results))
    // change console.log above to res.status(status)
    .catch(err => res.status(422).json(err));
});

// router
//   .route("/:id")
//   .get(saveController.findById)
//   .delete(saveController.remove);

module.exports = router;