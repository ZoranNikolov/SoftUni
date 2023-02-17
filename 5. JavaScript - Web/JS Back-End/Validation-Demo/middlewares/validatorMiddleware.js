const validators = require('../validators');

exports.isEmail = (req, res, next) => {

	const { email } = req.body;
	console.log(email);
	if(!validators.isEmail(email)) {
		return res.redirect('/404')
	}

	next();
}