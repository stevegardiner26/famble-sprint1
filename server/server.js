var port = 3003;
var express = require("express");
var app = express();
var path = require('path');
 
app.listen(port, () => {
    console.log("Server running on port " + port);
})

app.get('/', (req, res) => {
    console.log("HI")
    return res.send('Received a GET HTTP method');
});