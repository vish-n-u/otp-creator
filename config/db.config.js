const Sequelise = require("sequelize");

const sequelize = new Sequelise("otpcreator", "root", "MYSQLlover@123", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const otpModel = require("../model/otp.model")(Sequelise, sequelize);

async function init() {
  await otpModel.sync({ force: true });
}
init();

module.exports = otpModel;
