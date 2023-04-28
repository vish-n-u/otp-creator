if (process.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}

PORT = process.env.port;
module.exports = PORT;
