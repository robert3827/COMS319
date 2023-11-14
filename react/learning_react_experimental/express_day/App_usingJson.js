var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";



app.get("/listRobots", (req, res) => {
    fs.readFile(__dirname + "/" + "robots.json", "utf8", (err, data) => {
        console.log(data);
        res.status(200);
        res.send(data);
    });
});




app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});