# 83596-CodeChallenge-CSHA

This application is for the REQ83596 Code Challenge
#### Unfortunately this project has a few shortcomings
I tried to use technologies that are more relevant to the work I am currently doing, rather than what is more familiar to me, and suffered for the learning curve. Specifically there is no database connection, and server side tracking like last five names, times accessed, etc, only lives as long as the server does. Testing is not well developed at all. 
I'll get 'em next time...

## Installation
This project requires NodeJS to be installed, and that npm commands can be run. 
#### To run locally:
- Clone the repo
- Navigate to the root folder
- Install the packages with ```npm install packages```
- use ```npm run-script build``` to run Webpack
- Start the server ```Node server.js```

#### Set your browser to https://localhost:3000 to use the application.

## Testing
Unfortunately I did not get far with testing, and there is only one basic Jest test. I'll see if I can get some more meaningful tests in by noon, but Jest has presented a significant learning curve for me. 
To run test(s) type ```npm tests``` on the command line in the root directory. 
