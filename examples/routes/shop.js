const express = require('express');

const router = express.Router();

// router.use('/',(req,res,next)=>{
//     console.log('this always runs!');
//     next();    
// });

// router.use('/',(req,res,next)=>{
//     res.send('<h1>Hello from Express</h1>')
//     console.log('app.use in Middleware 2');    
// });

module.exports = router;
