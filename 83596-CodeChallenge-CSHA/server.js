
'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

var totalNames = 0;
var lastFiveNames = [];

const statsUpdats = (name) => {
    var newNameList = [name];
    var count = 0;
    totalNames++;
    
    for(regionName in lastFiveNames){
        count++;
        newNameList.push(regionName);
        if(count >= 4){
            break;
        }
    }

    lastFiveNames = newNameList;

}

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

app.get("/logging", (req, res) => {
    res.send("count: " + totalNames + "lastFiveNames: " +lastFiveNamess);
});

app.post("/logging", (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            return console.log(err);
        }

        // Specify database you want to access
    //    const db = client.db('CodeChallenge');
    //    const logs = db.collection('CHSANames');
        const name = req.query.name;
      
        logs.insertOne({ name });
    });
    

});

const { MongoClient, ServerApiVersion } = require('mongodb');



async function main() {
    const url = 'mongodb://127.0.0.1:27017';
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            return console.log(err);
        }

        // Specify database you want to access
        const db = client.db('school');

        console.log(`MongoDB Connected: ${url}`);
    });
}

main().catch(console.error);
