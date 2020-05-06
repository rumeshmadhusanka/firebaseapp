module.exports = function (app) {
	app.use("/", (req, res) => {
		console.log("Default route");
		res.status(404).json({"message": "Default Route"})
	});
};