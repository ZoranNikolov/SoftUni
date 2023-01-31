const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"content-type": "text/plain",
	});
	switch (req.url) {
		case "/":
			res.write("<h1>Hello from NodeJS!</h1>");
			break;
		case "/cats":
			res.write("Some cats here");
			break;
		default:
			res.write("Anything else");
			break;
	}
	res.end();
});

server.listen(5000);

console.log("Server is running on port 5000...");
