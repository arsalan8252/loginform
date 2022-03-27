require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// 
const db = require('./configuration/dataBase');
const Router = require('./routes/route');
// 
app.listen(port, ()=>{console.log(`server is running on port ${port}`)});

app.use('/',Router);