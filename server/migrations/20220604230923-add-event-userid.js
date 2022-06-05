'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn(
      'events',
      'user_id',
      {
        type: Sequelize.DataTypes.integer,
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('events', 'user_id');
  }
};
