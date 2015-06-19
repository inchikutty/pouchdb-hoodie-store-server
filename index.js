var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'html')));

global.appRoot = path.resolve(__dirname);

// serves main page
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: global.appRoot });
});
console.log( 'Welcome to pouchdb hoodie store server' );
app.listen(8000, function() {
  console.log('listening');
});
 