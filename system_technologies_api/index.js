var express = require('express')
var app = express()               

var port = 3003

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.listen(port)
console.log('API START ' + port)