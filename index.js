const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/prod')(app);
require('dotenv').config()

const port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://TodoList:<12345>@realmcluster.zttcf.mongodb.net/Project 0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));
// console.log("Conected...........",port)

module.exports = server;