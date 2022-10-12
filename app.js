const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const jsonFormRoute = require('./src/routes/jsonFormRoute');
const userRoute = require('./src/routes/userRoute');

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json({ limit: '50mb', extended: true }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// sanitize request data
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// api routes
app.use('/api/jsonForm', jsonFormRoute);
app.use('/api/user', userRoute);

module.exports = app;
