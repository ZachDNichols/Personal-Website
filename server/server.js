var express = require('express')
var app = express()

app.use(express.static('client'));

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://localhost:8000/')

})
