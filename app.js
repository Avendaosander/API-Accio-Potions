const express = require('express')
const morgan = require('morgan')
const routerApp = require("./routes/routerApp");
require('dotenv').config();
// MongoDB Connection
require('./database/db');

// Cors
const cors = require("cors");
const corsOptions = {
   credentials: true,
   origin: process.env.PATHCORS || '*',
   methods: ['GET', 'POST', 'PUT', 'DELETE']
};

// Settings
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routerApp);

module.exports = app;