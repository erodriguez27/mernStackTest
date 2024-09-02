'use strict'
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const http = require('http')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger.config');

const whiteListUrls = [
  /^(http?:\/\/)localhost(:\d+)?(\/.*)?$/
]
const optionsCors = {
  origin: whiteListUrls,
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'sentry-trace'],
  credentials: true,
  optionsSuccessStatus: 200
}
const filesRoutes = require('./routes/files.route')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(cors(optionsCors))
app.use('/files', filesRoutes())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = new http.Server(app)
console.log('backend port ', process.env.BACKEND_PORT)
const port = process.env.BACKEND_PORT || 3000

// start server
server.listen(port)
console.log('Express started. Listening on %s', port)

module.exports = {
  server, app
}
