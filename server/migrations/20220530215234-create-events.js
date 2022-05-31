'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      event_description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      event_location: {
        type: Sequelize.STRING,
        allowNull:false
      },
      event_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      time_posted: {
        type: Sequelize.DATE,
        allowNull:false
      },
      group_size: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};