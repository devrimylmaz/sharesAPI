const config = require("../config/config");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shares = require("./share")(sequelize, Sequelize);
db.portfolios = require("./portfolio")(sequelize, Sequelize);
db.trades = require("./trade")(sequelize, Sequelize);
db.users = require("./user")(sequelize, Sequelize);

module.exports = db;