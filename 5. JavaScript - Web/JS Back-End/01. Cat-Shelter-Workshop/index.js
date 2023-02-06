const fs = require("fs/promises");
const http = require("http");
const path = require("path");

const cats = require("./cats.json");

const server = http.createServer(async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html",
	});

	if (req.url == "/") {
		const homePage = await fs.readFile("./views/home.html");
		
		res.write(homePage);
	} else if (/cats\/\d+\/edit/.test(req.url)) {
		let catId = req.url.split("/")[2];
		let cat = cats.find((x) => x.id == catId);
		// res.write(editCat(cat));
	} else if (req.url == "/css/site.css") {
		res.writeHead(200, {
			"Content-Type": "text/css",
		});

		const siteCss = readFile('./content/styles/site.css')
		res.write(siteCss);
	} else {
		res.write(`
		<h1>404</h1>
		`);
	}

	res.end();
});

function readFile(path){
return fs.readFile(path, { encoding: 'utf-8' })
}

async function catTemplate(cat){
	const html = await fs.readFile
}

server.listen(5000);
console.log("Server is running on port 5000...");
