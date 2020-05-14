const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const Tweet = require('./modules/twitter');

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json());

// Hello World
app.get('/', (req, res) => {
  return res.send({ message: new Tweet().follow() });
});

// Form submit user
app.post('/user', (req, res)=>{
  if(!req.body){
    return res.send({message: "Error: Body can't be empty"})
  }
  return res.send({name: `Hello ${req.body.name}`});
});


// Testing express endpoints
exports.app = app;

// Firebase endpoint
exports.api = functions.https.onRequest(app);
