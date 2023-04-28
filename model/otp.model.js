const { Sequelize } = require("sequelize");

const otpSchema = (Sequelise, sequelize) => {
  const otps = sequelize.define("otps", {
    otp: {
      type: Sequelise.DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelise.DataTypes.TEXT,
      allowNull: false,
    },
  });
  return otps;
};

module.exports = otpSchema;
