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
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
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

app.get("/:id", async (req, res) => {
    const robotid = Number(req.params.id);
    console.log("Robot to find :", robotid);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": robotid };
    const results = await db.collection("robots")
        .findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});


// app.post("/addRobot", async (req, res) => {
//     console.log("Node: Post Add Robot REQ ID: " + req.id + " RES: "+ res);
// });

app.post("/addRobot", async (req, res) => {
    await client.connect();
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    const id = values[0]; // id
    const name = values[1]; // name
    const price = values[2]; // price
    const description = values[3]; // description
    const imageUrl = values[4]; // imageUrl
    console.log(id, name, price, description, imageUrl);
    const newDocument = { 
    "id":id,
    "name":name,
    "price":price,
    "description":description,
    "imageUrl":imageUrl
    };
    const results = await db.collection("robots").insertOne(newDocument);
    res.status(200);
    res.send(results);
    });
    

// app.delete("/deleteRobot", async(req, res) => {
//     console.log("Node: Delete Robot REQ ID: " + req.id + " RES: "+ res);
// })

app.delete("/deleteRobot", async (req, res) => {
    await client.connect();
    // const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    const id = values[0]; // id
    console.log("Robot to delete :",id);
    const query = { id: id };
    const results = await db.collection("robots").deleteOne(query);
    res.status(200);
    res.send(results);
    });
    



function getMethodById(id) {
    fetch('http://localhost:8081/' + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var container = document.getElementById("showData");
            container.innerHTML = JSON.stringify(data, undefined, 2);
        });
};





