const router = require("express").Router();
const mongoose = require("mongoose");

const authService = require("../services/authService");
const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorUtils");

router.get('/catalog', (req, res) => {
	res.render('photo/catalog');
});

router.get("/login", (req, res) => {
	res.render("auth/login");
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	try {
		const token = await authService.login(username, password);

		res.cookie("auth", token);
		res.redirect("/");
	} catch (error) {
		return res.status(404).render("auth/login", { error: getErrorMessage(error) });
	}
});

router.get("/register", (req, res) => {
	res.render("auth/register");
});

router.post("/register", async (req, res) => {
	const { username, email, password, repeatPassword } = req.body;

	try {
		const token = await authService.register(username, email, password, repeatPassword);

		res.cookie("auth", token);
		res.redirect("/");
	} catch (error) {
		res.status(400).render("auth/register", { error: getErrorMessage(error) });
	}
});

router.get("/logout", isAuth, (req, res) => {
	res.clearCookie("auth");
	res.redirect("/");
});

module.exports = router;