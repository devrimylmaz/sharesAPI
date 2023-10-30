const db = require('../models');
const Portfolio = db.portfolios;

async function createPortfolio(name) {
    try {
        const newPortfolio = await Portfolio.create({ name });
        return newPortfolio;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createSamplePortfolios() {
    try {
        const samplePortfolios = [
            { name: 'samplePortfolio1' },
            { name: 'samplePortfolio2' },
            { name: 'samplePortfolio3' },
            { name: 'samplePortfolio4' }
        ];
        await Portfolio.bulkCreate(samplePortfolios, {returning: true});
    
        console.log('5 sample shares created.');
    } catch (error) {
        console.error('Error creating sample shares:', error);
    }
}

async function checkPortfolio(portfolioId) {
    try {
        const portfolio = await Portfolio.findByPk(portfolioId);
        return portfolio;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createPortfolio,
    createSamplePortfolios,
    checkPortfolio
};