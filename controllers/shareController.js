const db = require('../models');
const Share = db.shares;
const Trade = db.trades;
const tradeController = require('../controllers/tradeController');
const portfolioController = require('../controllers/portfolioController');
const userController = require('../controllers/userController');

async function createShare(symbol, rate) {
    try {
        const newShare = await Share.create({ symbol, rate });
        return newShare;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createSampleShares() {
    try {
        const sampleShares = [
            { symbol: 'ABC', rate: 10 },
            { symbol: 'DEF', rate: 12 },
            { symbol: 'GHI', rate: 25 },
            { symbol: 'JKL', rate: 10 },
            { symbol: 'MNO', rate: 13 },
        ];
        await Share.bulkCreate(sampleShares, {returning: true});
    
        console.log('5 sample shares created.');
    } catch (error) {
        console.error('Error creating sample shares:', error);
    }
}

async function checkShare(shareSymbol) {
    try {
        const share = await Share.findAll({
            where: {
                symbol: shareSymbol
            }
        });
        return share;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function buyShare(req, res) {
    try {
        const { shareSymbol, quantity, userId, portfolioId } = req.body;

        //Check User
        const user = userController.checkUser(userId);
        if(!user) {
            console.error("There is no registered user with this id!");
            res.status(500).json({ error: 'Failed to buy share. There is no registered user with this id!' });
        }

        //Check Portfolio
        const portfolio = portfolioController.checkPortfolio(portfolioId);
        if(!portfolio) {
            console.error("There is no registered portfolio with this id!");
            res.status(500).json({ error: 'Failed to buy share. There is no registered portfolio with this id!' });
        }

        //Check Share
        const share = checkShare(shareSymbol);
        if(!share) {
            console.error("There is no registered share with this id!");
            res.status(500).json({ error: 'Failed to buy share. There is no registered share with this id!' });
        }

        const newTrade = tradeController.createTrade("BUY", quantity, shareSymbol, portfolioId);
        res.status(200).json(newTrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to buy share.' });
    }
}

async function sellShare(req, res) {
    try {
        const { shareSymbol, quantity, userId, portfolioId } = req.body;

        //Check User
        const user = userController.checkUser(userId);
        if(!user) {
            console.error("There is no registered user with this id!");
            res.status(500).json({ error: 'Failed to sell share. There is no registered user with this id!' });
        }

        //Check Portfolio
        const portfolio = portfolioController.checkPortfolio(portfolioId);
        if(!portfolio) {
            console.error("There is no registered portfolio with this id!");
            res.status(500).json({ error: 'Failed to sell share. There is no registered portfolio with this id!' });
        }

        //Check Share
        const share = checkShare(shareSymbol);
        if(!share) {
            console.error("There is no registered share with this id!");
            res.status(500).json({ error: 'Failed to sell share. There is no registered share with this id!' });
        }
        
        //Check quantity
        const quantityAvailable = tradeController.groupTradesByShare(shareSymbol);
        if (quantityAvailable < quantity) {
            console.error("There is not enough quantity!");
            res.status(500).json({ error: 'Failed to sell share. There is not enough quantity!' });
        }

        const newTrade = tradeController.createTrade("SELL", quantity, shareSymbol, portfolioId);
        res.status(200).json(newTrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to sell share.' });
    }
}

module.exports = {
    createShare,
    buyShare,
    sellShare,
    createSampleShares
};