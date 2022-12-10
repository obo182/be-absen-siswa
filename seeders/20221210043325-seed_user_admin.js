'use strict';
require('dotenv').config()
const { hash } = require('../helpers/bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
    username: 'admin',
    password: hash(`${process.env.PASSWORD_ADMIN}`),
    role:'admin',
    createdAt : new Date(),
    updatedAt : new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
