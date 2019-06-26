var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello PM2 Nick 10");
});

app.listen(4000);

