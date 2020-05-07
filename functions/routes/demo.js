const router = require("express").Router();
router.get('/',async (req, res)=>{
	res.json({"msg":"Hello"})
});

module.exports = router;