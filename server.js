var express = require('express')
var app = express()

var server = app.listen(process.env.PORT || 8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log(`Express app listening at http://localhost:${port}/"`)
})

app.get('/', (req, res) => {
    res.redirect('/home');
});


app.use(express.static('.'));
const githubRoute = require('./routes/githubprojects');
const homeRoute = require('./routes/home');
const projectsRoute = require('./routes/projects');
const bidenRoute = require('./routes/bbb');
const discordRoute = require('./routes/discordverify');

app.use('/github', githubRoute);
app.use('/home', homeRoute);
app.use('/projects', projectsRoute);
app.use('/bidensbadday', bidenRoute);
app.use('/.well-known/discord', discordRoute);

module.exports = app;
