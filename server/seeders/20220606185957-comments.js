'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('comments', [
    {
      user_id: 1,
      event_id: 4,
      content: "test",
      time_posted: new Date(),
      time_updated: new Date()
    },
    {
      user_id: 1,
      event_id: 4,
      content: "test test",
      time_posted: new Date(),
      time_updated: new Date()
    },
    {
      user_id: 1,
      event_id: 4,
      content: "test test test",
      time_posted: new Date(),
      time_updated: new Date()
    },
    {
      user_id: 1,
      event_id: 4,
      content: "test test test test",
      time_posted: new Date(),
      time_updated: new Date()
    },
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
