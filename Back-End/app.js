const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./dbConnect');
//const collection = "expense_db";
const init = require('./utils/init');


db.connect((err)=>{
    if(err){
        console.log('ERROR : Unable to connect to database');
        process.exit(1);
    }else{
        app.listen(init.PORT,()=>{
            console.log('********************************************')
            console.log('Hurray!! app listening to port ' + init.PORT);
            console.log('********************************************')
        })
    }
});

/*** calling APIs ***/

/*** Login ***/
app.use('/Login',require('./api/Login'));
/*** Signup ***/
app.use('/Signup',require('./api/Signup'));
/*** Add billing type ***/
app.use('/AddBillingType',require('./api/AddBillingType'));
/*** Add transactione ***/
app.use('/AddTransaction',require('./api/AddTransaction'));
/*** Fetch All transactione ***/
app.use('/GetAllTransactions',require('./api/GetAllTransactions'));
/***  Add Assets ***/
app.use('/AddAssets',require('./api/AddAssets'));
/***  Fetch All Assets ***/
app.use('/GetAllAssets',require('./api/GetAllAssets'));