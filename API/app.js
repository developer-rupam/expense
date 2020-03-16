const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./dbConnect');
const collection = "expense_db";

db.connect((err)=>{
    if(err){
        console.log('ERROR : Unable to connect to database');
        process.exit(1);
    }else{
        app.listen(3000,()=>{
            console.log('Hurray!! app listening to port 3000');
        })
    }
});