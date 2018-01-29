'use strict';

var port = 5100;

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var header = require('./src/middleware/header');

var create = require('./src/routes/create');

app.use(header());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create', create);

app.listen(port, () => {
    console.log(`express app listening on port ${port}`);
});
