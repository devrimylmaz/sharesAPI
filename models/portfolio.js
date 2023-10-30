'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      Portfolio.associate = (models) => {
        Portfolio.belongsTo(models.User);
        Portfolio.hasMany(models.Share);
      };
    }
  }
  Portfolio.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};