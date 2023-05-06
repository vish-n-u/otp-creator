const Sequelise = require("sequelize");

const USER_NAME = process.env.USER_NAME;
const DB_NAME = process.env.DB_NAME;
const HOST = process.env.HOST;
const PASSWORD = process.env.PASSWORD_DB;
console.log(DB_NAME, USER_NAME, PASSWORD);
const sequelize = new Sequelise(DB_NAME, USER_NAME, PASSWORD, {
  host: "localHost",
  dialect: "mysql",
});

const otpModel = require("../model/otp.model")(Sequelise, sequelize);

async function init() {
  await otpModel.sync({ force: true });
}
init();

module.exports = otpModel;
