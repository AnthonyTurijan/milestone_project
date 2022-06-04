'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'events',
      'image',
      {
        type: Sequelize.DataTypes.STRING,
      }
  )
  
    },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('events', 'image');
  }
};