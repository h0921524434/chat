var authApi = require('./app');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use('/', authApi);

app.listen(3000);
{
    console.log("start");
}