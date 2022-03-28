
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

app.get("/logging", (req, res) => {
    res.send("Hi!");
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
        const db = client.db('CodeChallenge');
        const name: string = req.query.name;
        const logs = db.collection('CHSANames');
      
        logs.updateOne({
            _id: 1
        }, {
            $inc: {
                timesAccessed: 1
            }
        })
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
