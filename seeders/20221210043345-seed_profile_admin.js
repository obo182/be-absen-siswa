'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('ProfileGurus', [{
    user_id: 1,
    nama_lengkap: 'Mimin SMKN2',
    alamat : 'smkn 2 sumbawa besar',
    createdAt : new Date(),
    updatedAt : new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProfileGurus', null, {});
  }
};
