const fetch = require('../index');
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    console.log(req.params)
})

/*router.get('/city/:id',()=>{

})

router.get('/price/:id',()=>{

})*/

module.exports=router;