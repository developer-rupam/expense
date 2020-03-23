const db = require('../dbConnect');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing helper file ***/
const library = require('../utils/library');

/*** importing variables from init ***/ 
const init=require('../utils/init');

const collection = 'transactions';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
    const userId = req.body.userId;
    const amount = req.body.amount;
    const type = req.body.type;
    const timestamp = req.body.timestamp;
    const description = req.body.description;
    const status = req.body.status;
    const billingTypeId = req.body.billingTypeId;

    if(userId!='' && amount!='' && type != '' && timestamp != ''){
        db.getDB().collection(collection).insert({userId:userId,timestamp:timestamp,amount : amount,type : type,description : description,status : status,biilingTypeId:billingTypeId},(err,result)=>{
            if(err){
                response.error.error_data=1;
                response.error.error_msg=err;
                library.resultData(response,res);
            }else{
                //res.json({result : result,document : result.ops[0]}); 
               response.error.error_data=0;
               response.error.error_msg='';
               response.result=result.ops[0];
               library.resultData(response,res);
            }
        });
    }else{
        response.error.error_data=1;
        response.error.error_msg='All fields must be field with values';
        library.resultData(response,res);
    }
    
});

module.exports = router;