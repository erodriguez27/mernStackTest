const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toolbox file api',
      version: '1.0.0',
      description: 'Api for fullstack MERN stack position',
    },
  },
  apis: ['./routes/files.route.js'],
};

module.exports = swaggerJsdoc(options);