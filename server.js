const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, ORIGIN } = require("./config/server.config");

const Sequelise = require("sequelize");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: ORIGIN,

  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow these methods
  allowedHeaders: ["Content-Type"], // allow these headers
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.status(200).send("Successfully created!");
});

require("./route/otp.route")(app);
app.listen(PORT, () => {
  console.log("reached");
});
