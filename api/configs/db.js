const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("pricer", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");

  const created = sequelize.sync();
  if (created) {
    console.log("==> TABLE CREATE DONE !");
  }
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
