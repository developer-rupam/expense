const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./dbConnect');
const collection = "expense_db";
const init = require('./utils/init');


db.connect((err)=>{
    if(err){
        console.log('ERROR : Unable to connect to database');
        process.exit(1);
    }else{
        app.listen(init.PORT,()=>{
            console.log('Hurray!! app listening to port ' + init.PORT);
        })
    }
});

/*** calling APIs ***/

/*** Login ***/
app.use('/Login',require('./api/Login'));