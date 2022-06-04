'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('profiles', [
    {
      profile_id: 1,
      user_id: 1,
      bio: 'Innovative, confident Technical Professional with years of progressive experience including web services skills.   I’m learning new technologies such as React, JavaScript, express js. Now seeking a role that will allow for continued career growth.'
    },
        
  ], {}),

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profiles', null, {})
  }
};
