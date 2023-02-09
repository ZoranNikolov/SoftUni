const express = require("express");
const handlebars = require("express-handlebars");

const loggerMiddleware = require("./loggerMiddleware");

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
	res.render("home");
});

// app.get("/", (req, res) => {
// 	res.send(`
// 	<html>
// 		<head>
// 			<link rel="stylesheet" href="/css/style.css"/>
// 		</head>
// 		<body>
// 			<h1>Hello from Express!</h1>
// 			<a href="/cats">cats</a>
// 		</body>
// 	</html>
// 	`);
// });

app.get("/cats", (req, res) => {
	const cats = [
		{ name: "Navcho", breed: "Persian", age: 7 },
		{ name: "Sisa", breed: "Angora", age: 12 },
		{ name: "Zuza", breed: "UlichnaPrevazhodna", age: 8 },
	];
	res.render("cats", { cats });
});

app.get("/cats/1", (req, res) => {
	res.sendFile("./cat.jpg", { root: __dirname }); // open the file in the browser
	// res.download("./cat.jpg"); // download the file directly
	// res.attachment("./cat.jpg"); // without end()
});

let validateCatMiddleware = (req, res, next) => {
	let catId = Number(req.params.catId);

	if (!catId) {
		return res.send("Invalid CatId!!");
		// return res.redirect('/404')
	}

	req.catId = catId;

	next();
};

app.get("/cats/:catId", validateCatMiddleware, (req, res) => {
	// res.send(`<h1>Individual Cat Page - catId=${req.params.catId}</h1>`);
	res.render("cat", { id: req.params.catId, isOdd: req.catId % 2 != 0 });
});

app.get("/dogs", (req, res) => {
	res.send("<h1>Dogs page!</h1>");
});

app.post("/cats", (req, res) => {
	res.send("cat received");
});

app.put("/cats", (req, res) => {
	res.send("cat is updated");
});

app.delete("/cats", (req, res) => {
	res.send("cat deleted");
});

app.get("/json", (req, res) => {
	res.json({ ok: true, message: "Hello from json" });
});

app.get("/redirect", (req, res) => {
	res.redirect("/redirected");
});

app.get("/redirected", (req, res) => {
	res.send("This is redirected page");
});

app.get("*", (req, res) => {
	res.send("404");
});

app.listen(5000, () => console.log("Server is listening on port 5000..."));
