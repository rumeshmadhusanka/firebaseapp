require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
// support parsing of application/json type post data
app.use(bodyParser.json());

//routes
routes(app);

module.exports = {
	webApi: functions.https.onRequest(app)

};