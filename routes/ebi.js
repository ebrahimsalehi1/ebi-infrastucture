const express = require('express');

const router = express.Router();

router.get('/ebi',(req,res,next)=>{
    res.send("ebi is great");
  });

module.exports = router;
