var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);





// app.get("/listRobots", (req, res) => {
//     fs.readFile(__dirname + "/" + "robots.json", "utf8", (err, data) => {
//         console.log(data);
//         res.status(200);
//         res.send(data);
//     });
// });


app.get("/listRobots", async (req, res) => {                //With /:id this is parameter
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
    .collection("robots")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
    });




app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});