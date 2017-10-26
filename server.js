// server.js

/* ========================================
 * ================ SETUP =================
 * ======================================== */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const port = process.env.PORT || 8080;

// Create express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set locations of static files
app.use(express.static(path.join(__dirname, '/dist')));

// Configure database
mongoose.connect(dbConfig.url);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log('Connected to database.');
});

// Require Participants routes
require('./app/routes/participant.routes.js')(app);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

