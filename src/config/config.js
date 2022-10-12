const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoose: {
        url: process.env.MONGODB_URL,
        url_onl: process.env.MONGODB_URL_ONL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    max: {
        USER_NAME: 100,
        FULL_NAME: 100,
        EMAIL_LEN: 100,
        PASSWORD_LEN: 40,
        PRICE: 999_999_999
    }
};
