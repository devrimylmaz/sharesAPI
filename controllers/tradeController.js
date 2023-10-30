const db = require('../models');
const Trade = db.trades;

async function createTrade(type, quantity, shareId, portfolioId) {
    try {
        const newTrade = await Trade.create({ type, quantity, shareId, portfolioId });
        return newTrade;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createSampleTrades() {
    try {
        const sampleTrades = [
            { type: 'BUY', quantity: 10, shareSymbol: 'ABC' },
            { type: 'SELL', quantity: 7, shareSymbol: 'ABC' },
            { type: 'BUY', quantity: 5, shareSymbol: 'ABC' },
            { type: 'SELL', quantity: 3, shareSymbol: 'ABC' }
        ];
        await Trade.bulkCreate(sampleTrades, {returning: true});
    
        console.log('5 sample trades created.');
    } catch (error) {
        console.error('Error creating sample trades:', error);
    }
}

async function groupTradesByShare(shareSymbol) {
    try {
        const boughtTrades = await Trade.findAll({
            where: {
                shareSymbol: shareSymbol,
                type: "BUY"
            }
        });

        let totalQuantityBought;
        boughtTrades.array.forEach(trade => {
            totalQuantityBought += trade.quantity;
        });

        const soldTrades = await Trade.findAll({
            where: {
                shareSymbol: shareSymbol,
                type: "SELL"
            }
        });

        let totalQuantitySold;
        soldTrades.array.forEach(trade => {
            totalQuantitySold += trade.quantity;
        });

        return totalQuantityBought - totalQuantitySold;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createTrade,
    groupTradesByShare,
    createSampleTrades
};