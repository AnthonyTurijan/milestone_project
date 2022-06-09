'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'salt',
      {
          type: Sequelize.DataTypes.STRING,
      }
    )
    },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'salt');
  }
};
