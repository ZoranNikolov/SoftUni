const http = require("http");

const homePage = require("./views/index");
const editCat = require("./views/editCat");
const siteCss = require("./css/site.css");

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html",
	});
	switch (req.url) {
		case "/":
			res.write(homePage);
			break;
		case "/css/site.css":
			res.writeHead(200, {
				"Content-Type": "text/css",
			});
			res.write(siteCss);
			break;
		default:
			res.write("<h1>404</h1>");
			break;
	}

	res.end();
});

server.listen(5000);
console.log("Server is running on port 5000...");
