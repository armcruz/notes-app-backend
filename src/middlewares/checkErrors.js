const { validationResult } = require('express-validator');

exports.checkErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(400)
			.json({ success: false, errors: errors.mapped() });
	}
	next();
};
