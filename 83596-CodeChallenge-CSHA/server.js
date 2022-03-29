
'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

var totalNames = 0;
var lastFiveNames = [];

const statsUpdates = (name) => {
    var newNameList = [];
    newNameList.push(name);
    var count = 0;
    totalNames++;
    
    for(var regionName in lastFiveNames){
        count++;
        newNameList.push(lastFiveNames[regionName]);
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
    var namesList = "";
    for (var name in lastFiveNames) {
        namesList += lastFiveNames[name];
        if (name !== lastFiveNames[lastFiveNames.length - 1]) {
            namesList += ", ";
        }
    }
    var data = `{"count": "${totalNames}", "lastFiveNames": "${namesList}"}`;
    return res.send(data);
});

app.post("/logging", (req, res) => {
    //const url = 'mongodb://127.0.0.1:27017';
    //MongoClient.connect(url, {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true
    //}, (err, client) => {
    //    if (err) {
    //        return console.log(err);
    //    }

        // Specify database you want to access
    //    const db = client.db('CodeChallenge');
    //    const logs = db.collection('CHSANames');
  //  logs.insertOne({ name });
        const name = req.query.name;
        statsUpdates(name);
    return res.status;
  //  });
    

});

app.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
});
//const { MongoClient, ServerApiVersion } = require('mongodb');



//async function main() {
//    const url = 'mongodb://127.0.0.1:27017';
//    MongoClient.connect(url, {
//        useNewUrlParser: true,
//        useUnifiedTopology: true
//    }, (err, client) => {
//        if (err) {
//            return console.log(err);
//        }

//        // Specify database you want to access
//        const db = client.db('school');

//        console.log(`MongoDB Connected: ${url}`);
//    });
//}

//main().catch(console.error);
module.exports = app;