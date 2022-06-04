'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      user_name: 'rowens',
      first_name: 'Ron',
      last_name: 'Owens',
      email: 'rowens72@yahoo.com',
      password_hash: '$2a$14$gGJMlNoehpAsVUHMQ7WV9u', //test1234
      profile_id: 1,
      registered_at: new Date(),
      updatedAt: new Date()
    },
        
  ], {}),

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
