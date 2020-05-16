const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
dotenv.config({path: path.resolve(__dirname + '../env')})

mongoose.connect("mongodb://localhost:27017/jaliAjali", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
});



mongoose.connection.on('connection', error => console.log(error));
const db = mongoose.connection;
db.once('open', ()=> {console.log('Db connected')});
mongoose.Promise = global.Promise;


app.use(cors({origin: true}));
app.use(bodyParser.json());

// Hello World
app.get('/', (req, res) => {
  return res.send({message: "Hello World"});
});


let accidentRoute = require('./routes/accident.route');

app.use('/v1/accident', accidentRoute);



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
 