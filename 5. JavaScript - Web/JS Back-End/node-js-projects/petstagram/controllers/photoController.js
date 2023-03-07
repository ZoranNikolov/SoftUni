const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");
const photoService = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorUtils");

router.get("/catalog", async (req, res) => {
	const photo = await photoService.getAll();
	
	res.render("photo/catalog", { photo });
});

router.get('/create', (req, res) => {
	res.render("photo/create");
})

router.post("/create", isAuth, async (req, res) => {
	const photoData = req.body;
	try {
		await photoService.create(req.user._id, photoData);
	} catch (error) {
		return res.status(400).render("photo/create", { error: getErrorMessage(error) });
	}
	
	res.redirect("/photo/catalog");
});

router.get('/:photoId/details', (req, res) => {

	res.render(`photo/details`)
})

module.exports = router;