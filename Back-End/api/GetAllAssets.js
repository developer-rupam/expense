const db = require('../dbConnect');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing library file ***/
const library = require('../utils/library');

/*** importing variables from init ***/ 
const init=require('../utils/init');

const collection = 'asset_type';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
   
        const userId = req.body.userId;
        if(userId!=undefined ){
            db.getDB().collection(collection).find({userId : userId}).toArray((err,document)=>{
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