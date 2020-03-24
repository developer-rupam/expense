const db = require('../dbConnect');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing helper file ***/
const library = require('../utils/library');

/*** importing variables from init ***/ 
const init=require('../utils/init');

const collection = 'asset_type';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
    const userId = req.body.userId;
    const assetName = req.body.assetName;
    const assetAlias = req.body.assetAlias;
    const description = req.body.description;

    if(userId!=undefined && assetName!=undefined && assetAlias != undefined ){
        db.getDB().collection(collection).insert({userId:userId,assetName:assetName,assetAlias:assetAlias,description:description},(err,result)=>{
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