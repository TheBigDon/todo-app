module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    content: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: "Please enter your todo",
        },
      },
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select a category",
        },
      },
    },
    done: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Todo;
};
