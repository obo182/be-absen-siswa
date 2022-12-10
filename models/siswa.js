'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Siswa.hasMany(models.DataAbsen, {foreignKey : 'id_siswa'})
    }
  }
  Siswa.init({
    nisn: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING,
    ttl: DataTypes.STRING,
    no_hp_siswa: DataTypes.STRING,
    no_hp_ortu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Siswa',
  });
  return Siswa;
};