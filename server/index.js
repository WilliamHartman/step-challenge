const express = require('express');
const massive = require('massive');
const process = require("process");
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();


const ctrl = require('./controller');
const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(__dirname + './../build'));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

// Use the session middleware 
massive(process.env.CONNECTION_STRING)
    .then( (db) => {
        console.log('Connected to Heroku')
        app.set('db', db);
    }).catch(err=>console.log(err))


//Endpoints
app.get(`/api/getsteps`, ctrl.getSteps)


// launch the server
const PORT = 8084;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));