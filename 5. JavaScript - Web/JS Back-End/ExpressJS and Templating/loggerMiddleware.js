module.exports = (req, res, next) => {
	console.log(`Requested url: ${req.url} with method: ${req.method}`);

	next()
}