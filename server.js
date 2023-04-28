const express = require("express");
const app = express();
const cors = require("cors");
const PORT = require("./config/server.config");
const Sequelise = require("sequelize");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Successfully created!");
});

require("./route/otp.route")(app);
app.listen(PORT, () => {
  console.log("reached");
});
