'use strict';
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const http = require('http');
const app = express();

app.use(express.json({ limit: '50mb' }));

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

const server = new http.Server(app);
const port =  process.env.PORT || 3000;

// start server
server.listen(port)
console.log('Express started. Listening on %s', port);

module.exports = {
    server, app
}