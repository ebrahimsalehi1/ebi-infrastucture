var express = require('express');
var router = express.Router();

var fs = require('fs')
var config = require('../config')

/* GET users listing. */
router.get('/', function(req, res, next) {

    fs.readFile(config.bpmnioXMLFile,'utf8',(err,data)=>{
        if(!err)
            res.send(data);

    })

  });
  
module.exports = router;

