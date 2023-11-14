var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

const { MongoClient } = require("mongodb");
const url = "mongodb://172.28.128.1:27017";
const dbName =
    "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/listRobots", async (req, res) => {
    console.log("App Get Called");
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