'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileGuru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProfileGuru.belongsTo(models.User, {foreignKey : 'user_id'})
    }
  }
  ProfileGuru.init({
    user_id: DataTypes.INTEGER,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProfileGuru',
  });
  return ProfileGuru;
};