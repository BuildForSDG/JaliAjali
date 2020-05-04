const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json());

// Hello World
app.get('/', (req, res) => {
  return res.send({message: "Hello World"});
});

// Form submit user
app.post('/user', (req, res)=>{
  if(!req.body){
    return res.send({message: "Error: Body can't be empty"})
  }
  return res.send({name: req.body.name});
});

exports.app = app;
exports.api = functions.https.onRequest(app);
