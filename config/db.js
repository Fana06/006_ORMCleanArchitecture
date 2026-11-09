const db = require('../models');

async function connectDB() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected succes.');

        await db.sequelize.sync({alter: true});
        console.log('Database synchronized.');
    } catch (error) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;