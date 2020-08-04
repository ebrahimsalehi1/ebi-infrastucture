const express = require('express');

const router = express.Router();

router.post('/fnd/auth/login',(req,res,next)=>{
    const userData = req.body;
    
    if(userData.username==='admin' && userData.pass==='admin')
        res.send('{"result":true}');
    else
        res.send('{"result":false}');

    console.log(req.body);
  });

module.exports = router;
