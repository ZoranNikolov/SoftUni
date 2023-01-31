const http = require("http");

const server = http.createServer((req, res) => {
	const url = new URL(req.url);

	switch (url.pathname) {
		case "/":
			res.write("Hello from NodeJS!");
			break;
		case "/cats":
			res.write("Some cats here");
		default:
			res.write("Anything else");
			break;
	}
	res.end();
});

server.listen(5000);

console.log("Server is running on port 5000...");
