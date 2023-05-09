if (process.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}

PORT = process.env.port;
ORIGIN = process.env.ORIGIN;
module.exports = {PORT,ORIGIN};
