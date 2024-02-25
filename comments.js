// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');
var _ = require('lodash');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/comments', function(req, res) {
    res.json(comments);
});

app.post('/api/comments', function(req, res) {
    var newComment = {
        id: Date.now(),
    };
});
