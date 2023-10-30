'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Share extends Model {
    static associate(models) {
      Share.associate = (models) => {
        Share.belongsTo(models.Portfolio);
      };
    }
  }
  Share.init({
    symbol: DataTypes.STRING,
    rate: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Share',
  });
  return Share;
};