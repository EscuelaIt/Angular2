"use strict";
var express = require('express');

var bodyParser = require('body-parser');
var cors = require('cors');

var maestros = require('./maestros.js');
var movimientos = require('./movimientos.js');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


maestros(app, '/maestros');
movimientos(app, '/movimientos')

app.listen(3000);
console.log('listening on port 3000');
