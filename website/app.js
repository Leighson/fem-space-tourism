const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}.`);
});