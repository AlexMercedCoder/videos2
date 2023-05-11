const connection = require("../database");
const { DataTypes } = require("sequelize");

const Todo = connection.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

async function migrate_todo() {
  await Todo.sync({ alter: true });
}

migrate_todo();

module.exports = Todo;
