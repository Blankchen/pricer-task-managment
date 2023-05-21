const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const TaskModel = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = TaskModel