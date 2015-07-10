	var express = require('express');

	module.exports = function (options, callback) {
		var app = express();

		//serve any static asset
		app.use(express.static( options.path));

		app.listen(options.port, callback);
	}
