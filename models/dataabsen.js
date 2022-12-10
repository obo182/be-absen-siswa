'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataAbsen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataAbsen.belongsTo(models.Siswa, {foreignKey : 'id_siswa'})

    }
  }
  DataAbsen.init({
    id_siswa: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataAbsen',
  });
  return DataAbsen;
};