var express = require('express');
var app = express();

var userData = [
	{'id':1, 'fname':'Mark', 'lname':'Otto', 'username':'@mdo'},
	{'id':2, 'fname':'Jacob', 'lname':'Thornton', 'username':'@fat'},
    {'id':3, 'fname':'Larry', 'lname':'the Bird', 'username':'@twitter'}
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World backend!');
});

app.get('/users', function(request, response) {
	response.setHeader('Content-Type', 'application/json');
	 setTimeout((function() {response.send(userData);}), 2000);
})

app.listen(3001, function () {
    console.log('Server started on port 3001!');
});
