const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();
require("dotenv")

const PORT = process.env.PORT || 3001;

const MONGOD_URI = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds153775.mlab.com:53775/heroku_w2cm2s4j`;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(MONGOD_URI, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});