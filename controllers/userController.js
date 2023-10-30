const db = require('../models');
const User = db.users;

async function createUser(username, password) {
    try {
        const newUser = await User.create({ username, password });
        return newUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createSampleUsers() {
    try {    
        const sampleUsers = [
            { username: 'sampleUser1', password: 'samplePassword1' },
            { username: 'sampleUser2', password: 'samplePassword2' },
            { username: 'sampleUser3', password: 'samplePassword3' },
            { username: 'sampleUser4', password: 'samplePassword4' },
            { username: 'sampleUser5', password: 'samplePassword5' },
        ];
        User.bulkCreate(sampleUsers, {returning: true});
    
        console.log('5 sample users created.');
    } catch (error) {
        console.error('Error creating sample users:', error);
    }
}

async function checkUser(userId) {
    try {
        const user = await User.findByPk(userId);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createUser,
    createSampleUsers,
    checkUser
};