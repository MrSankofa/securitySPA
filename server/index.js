var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
const reviewData = require('../data/data.js')
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

var port = process.env.PORT || 3008;

app.get('/DummyYelpServer', (req, res) => {
    res.send(reviewData)
});

app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`);
});