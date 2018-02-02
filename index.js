'use strict';

var port = 5100;

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var header = require('./src/middleware/header');
var auth = require('./src/middleware/auth');

var memo = require('./src/routes/memo');
var memoList = require('./src/routes/memoList');
var category = require('./src/routes/category');
var categoryList = require('./src/routes/categoryList');

app.use(header());
app.use(auth());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/memo', memo);
app.get('/memo', memoList);
app.post('/category', category);
app.get('/category', categoryList);

app.listen(port, () => {
    console.log(`express app listening on port ${port}`);
});
