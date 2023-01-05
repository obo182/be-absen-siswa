'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Siswas', 'id_kelas', Sequelize.INTEGER)
    await queryInterface.addConstraint('Siswas', {
      fields: ['id_kelas'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name_id_kelas',
      references: {
        table: 'Kelas',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Siswas', 'custom_fkey_constraint_name_id_kelas')
    await queryInterface.removeColumn('Siswas', 'id_kelas')
  }
};
