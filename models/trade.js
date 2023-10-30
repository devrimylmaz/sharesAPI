'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Trade extends Model {
        static associate(models) {
            Trade.associate = (models) => {
                Trade.belongsTo(models.User);
                Trade.hasOne(models.Share);
            };
        }
    }
    Trade.init({
        type: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        shareSymbol: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Trade',
    });
    return Trade;
};