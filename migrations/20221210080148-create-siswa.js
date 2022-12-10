'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nisn: {
        type: Sequelize.STRING,
        unique : true
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      ttl: {
        type: Sequelize.STRING
      },
      no_hp_siswa: {
        type: Sequelize.STRING
      },
      no_hp_ortu: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Siswas');
  }
};