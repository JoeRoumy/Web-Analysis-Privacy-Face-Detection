//require depenciess
var express = require('express');
// var router = require('./app/routes');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var DB_URI = "mongodb://localhost:27017/portfolio";

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

// mongoose.connect(DB_URI);
//routes here
app.use('/',function (req,res) {
	res.render('index')
});


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
