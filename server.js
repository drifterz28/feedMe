'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var sql = require('./lib/crud');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/feed/list', function(req, res) {
    var userId = req.query.userId;
    sql.init();
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse('{}'));
    res.end();
});

app.post('/api/signin', function(req, res) {

});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
