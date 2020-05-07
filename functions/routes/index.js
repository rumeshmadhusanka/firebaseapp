module.exports = function (app) {
	app.use('/demo', require('./demo'));
	app.use("/", (req, res) => {
		console.log("Default route");
		res.status(404).json({"message": "Default Route" + process.env.AWS_S3_BUCKET})
	});
};