var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');
const BASE_DIR = __dirname

const print = (what) => {
    return console.log(what)
}


app.set('views', path.join(BASE_DIR + '/build'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.render('index.html');
});


app.get('/bundle.js', function (req, res) {
  res.sendFile(BASE_DIR + '/build/bundle.js');
});


app.get('/test', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('backend listening on port 3000!');
});
