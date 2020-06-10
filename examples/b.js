

var express = require('express');
var ebi = require('./a');

var app = express();

app.use('/ebi',ebi);
app.listen(4000);

//console.log(ebi);
