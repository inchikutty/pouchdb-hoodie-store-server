//var path = require('path');
var express = require('express');

var app = express();

//app.use(express.static(path.join(process.cwd(), 'html')));


// serves main page
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: process.cwd() });
});
console.log( 'Welcome to pouchdb hoodie store server' );

app.listen(8000, function() {
  console.log('listening here');
});
