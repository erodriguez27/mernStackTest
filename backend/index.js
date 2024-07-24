'use strict';
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const http = require('http');
const app = express();

app.use(express.json({ limit: '50mb' }));

const server = new http.Server(app);

module.exports = {
    server, app
}