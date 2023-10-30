const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const userController = require('./controllers/userController');
const portfolioController = require('./controllers/portfolioController');
const shareController = require('./controllers/shareController');
const tradeController = require('./controllers/tradeController');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({limit: '200mb', extended: true}))
    .use(bodyParser.json({ limit: '200mb', type: [ "application/json", "text/plain" ] }));

app.use('/', router);

const db = require("./models");
db.sequelize.sync()
  .then(async () => {
    console.log("Database is connected.");

    //Create sample data
    await userController.createSampleUsers();
    await portfolioController.createSamplePortfolios();
    await shareController.createSampleShares();
    await tradeController.createSampleTrades();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });