var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'frame.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'a.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'abc.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'b.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'register_028.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '201510028', 'img.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/IMG_20160322_152337.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160322_152337.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
