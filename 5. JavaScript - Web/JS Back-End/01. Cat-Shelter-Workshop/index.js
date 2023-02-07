const fs = require("fs/promises");
const fss = require("fs");
const http = require("http");
const qs = require("querystring");

const cats = require("./cats.json");

const server = http.createServer(async (req, res) => {
	console.log(req.url);
	res.writeHead(200, {
		"Content-Type": "text/html",
	});

	if (req.url == "/") {
		const homePage = await readFile("./views/home.html");
		const catsHtml = cats.map((cat) => catTemplate(cat)).join("");
		const result = homePage.replace("{{cats}}", catsHtml);
		res.write(result);
	} else if (/cats\/\d+\/edit/.test(req.url)) {
		// let catId = req.url.split("/")[2];
		// let cat = cats.find((x) => x.id == catId);
		let editCatHtml = await readFile("./views/editCat.html");
		let qsData = qs.parse(req.url.split('?')[1])
		console.log(qsData);
		res.write(editCatHtml);
	} else if (req.url == "/css/site.css") {
		res.writeHead(200, {
			"Content-Type": "text/css",
		});

		const siteCss = readFile("./content/styles/site.css");
		res.write(siteCss);
	} else {
		res.write(`
		<h1>404</h1>
		`);
	}

	res.end();
});

function readFile(path) {
	return fs.readFile(path, { encoding: "utf-8" });
}

function catTemplate(cat) {
	const html = fss.readFileSync("./views/partials/cat.html", {
		encoding: "utf-8",
	});

	// let result = html.replaceAll("{{name}}", cat.name);
	// result = result.replace("{{description}}", cat.description);
	// result = result.replace("{{imageUrl}}", cat.imageUrl);
	// result = result.replace("{{breed}}", cat.breed);

	const modifiedHtml = Object.keys(cat).reduce((result, key) => {
		return result.replaceAll(`{{${key}}}`, cat[key]);
	}, html);

	return modifiedHtml;
}

server.listen(5000);
console.log("Server is running on port 5000...");
