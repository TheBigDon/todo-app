import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize();

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: "Please enter your todo",
      },
    },
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please select a category",
      },
    },
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Todo;
