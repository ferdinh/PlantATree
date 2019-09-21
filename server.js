var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist/plantatree'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/plantatree/index.html'));
});

// Listen on default port or 8080
app.listen(process.env.PORT || 8080);
