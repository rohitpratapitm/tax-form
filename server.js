const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    console.error('inside join');
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200);
console.log('Console listening!');