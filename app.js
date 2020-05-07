require('dotenv').config();
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// This server is for displaying API Documentation
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			host: process.env.SWAGGER_HOST,
			basePath: process.env.SWAGGER_BASE_PATH
		}
	},
	apis: ['./swagger-api/**.yaml']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server is listening to port " + port);
});

