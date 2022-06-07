'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('events', [
    {
      event_name: 'Milestone Project II',
      event_description: 'CSLB Software Development Program: Milestone Project II',
      event_location: 'Online - Zoom meeting',
      event_time: new Date('2002-06-08 06:00:00'),
      user_id: 1,
      user_name: 'Bad8reak',
      time_posted: new Date(),
      group_size: 0,      
    },
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('events', null, {})
  }
};
