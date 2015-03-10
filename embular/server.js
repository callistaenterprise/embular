var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public/src'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
	res.sendfile('./public/src/index.html');
});

app.listen(5200);