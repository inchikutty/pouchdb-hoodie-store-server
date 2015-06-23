	var express = require('express');

	module.exports = function (options, callback) {
		var app = express();

		// serves main page
		app.get('/', function(req, res) {
			res.sendFile('index.html', { root: options.path });
		});

		app.listen(options.port, callback);
	}
