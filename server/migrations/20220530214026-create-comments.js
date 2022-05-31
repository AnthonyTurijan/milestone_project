'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false
      },
      time_posted: {
        type: Sequelize.DATE,
        allowNull:false
      },
      time_updated: {
        type: Sequelize.DATE,
        allowNull:false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};