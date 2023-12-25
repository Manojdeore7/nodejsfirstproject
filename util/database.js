const Sequelize = require("sequelize");

const sequelize = new Sequelize("firstDatabse", "root", "Manoj@123", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
