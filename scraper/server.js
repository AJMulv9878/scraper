var express = require('express');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

app.use(express.static('public'));
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoArticles';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log('Listening on ' + PORT);
});