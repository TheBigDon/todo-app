"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("todos", [
      {
        content: "throw out the trash",
        category: "personal",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "feed the dog",
        category: "personal",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "buy groceries at home",
        category: "business",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "check email",
        category: "personal",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "pick up delivery",
        category: "personal",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  },
};
