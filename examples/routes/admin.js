const express = require('express');

const router = express.Router();

router.get('/admin/add-product',(req,res,next)=>{
    console.log('app.use in the Middleware');   
    res.send('<form action="admin/add-product" method="POST"><input type="text" name="title"><button type=""submit>Click</button></input></form>')
    //next();     
});

router.post('admin/add-product',(req,res,next)=>{
    console.log(req.body);    
    res.redirect('/');
});


module.exports = router;
