require('dotenv').config();

module.exports = {
    googleClientID : process.env.GOOGLE_PROD_ID,
    googleClientSecret : process.env.GOOGLE_PROD_SECRET,
    mongoURI : process.env.MONGO_PROD_URL,
    cookieKey: process.env.COOKIE_KEY
};