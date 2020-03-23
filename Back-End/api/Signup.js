const db = require('../dbConnect');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing helper file ***/
const library = require('../utils/library');

/*** importing variables from init ***/ 
const init=require('../utils/init');

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;

    if(email!='' && password!='' && phone != '' && name != ''){
        db.getDB().collection(init.COLLECTION).insert({email:email,password:password,fullname : name,phone : phone},(err,result)=>{
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