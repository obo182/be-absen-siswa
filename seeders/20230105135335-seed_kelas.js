'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Kelas', [{
      name: 'X-TKJ-1',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'X-TKJ-2',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'XI-TKJ-1',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'XI-TKJ-2',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kelas', null, {});
  }
};
