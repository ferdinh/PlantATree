var express = require('express');
var path = require('path');
var mongoose = require('mongoose')

var app = express();

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))

db.once('open', function() {
    console.log('Connection established to database')
});


app.use(express.static('./dist/plantatree'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/plantatree/index.html'));
});

// Listen on default port or 8080
app.listen(process.env.PORT || 8080);
