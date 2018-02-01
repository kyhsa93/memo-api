'use strict';

var port = 5100;

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var header = require('./src/middleware/header');
var auth = require('./src/middleware/auth');

var create = require('./src/routes/create');
var memoList = require('./src/routes/memoList');
var categoryList = require('./src/routes/categoryList');

app.use(header());
app.use(auth());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create', create);
app.get('/memo-list', memoList);
app.get('/category-list', categoryList);

app.listen(port, () => {
    console.log(`express app listening on port ${port}`);
});
