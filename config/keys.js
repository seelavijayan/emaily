// keys.js - figure out what set of credentials to return
require('dotenv').config();

if(process.env.NODE_ENV === 'production') {
    // we are in production  - return the prod set of keys
    module.exports = require('./prod');
}
else {
    // we are in developemnt  - return the dev set of keys
    module.exports = require('./dev');
}