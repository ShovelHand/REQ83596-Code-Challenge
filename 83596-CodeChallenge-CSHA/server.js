
'use strict';
var path = require('path');
var express = require('express');


var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

var frontEndAccessCount = 0;
var lastFiveNames = [];

const { MongoClient, ServerApiVersion } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://REQ83596:iAWNYzSN4JKW8zqW@alexc-codechallenge.3o4eg.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
       await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);
