const db = require('../dbConnect');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing library file ***/
const library = require('../utils/library');

/*** importing variables from init ***/ 
const init=require('../utils/init');

const collection = 'transactions';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
   
        const userId = req.body.userId;
        const transactionId = req.body.transactionId;

        if(userId!=undefined && transactionId !=undefined){
            db.getDB().collection(collection).find({userId : userId,_id:db.getPrimaryKey(transactionId)}).toArray((err,document)=>{
                if(err){
                    response.error.error_data=1;
                    response.error.error_msg=err;
                    library.resultData(response,res);
                }else{
                    //res.json({result : result,document : result.ops[0]}); 
                response.error.error_data=0;
                response.error.error_msg='';
                    response.result=document;
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