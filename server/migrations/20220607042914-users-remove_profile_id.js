'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'profile_id');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'profile_id',
      {
          type: Sequelize.DataTypes.INTEGER,
      }
    )
  }
};
