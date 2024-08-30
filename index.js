const express = require('express');
const connDb = require('./db/connection');
const router = require('./routes/product');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

//Config file
require('dotenv').config();

//DB connection
connDb();

app.get('/',(req,res)=>{
    res.send("This is nodejs project")
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.use(router)

const port = 4000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})