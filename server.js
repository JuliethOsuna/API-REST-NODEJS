const express = require('express');  
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
 res.json({"tutorial" : "Construyendo una API REST con NodeJS"});
});

app.listen(3000, function(){ console.log('El servidor ha sido inicializado: http://localhost:3000');});