var express = require('express');
var app = express();
// var redisdb = require('./redisdb');
var oradb = require('./oradb');
var redis = require('redis');
const client = redis.createClient();

app.get('/',(req,res)=>{
    client.get('dataEmployee',(err,reply)=>{
        //console.log(reply);
        res.send(reply);
    });
})

app.post('/saveData',(req,res)=>{
    
    let id=0;
    function createEmployeeData(){
        return JSON.stringify({id:++id,firstName:'ebrahim',lastName:'salehi',salary:3000});
    }

    const len = 1000;
    let strJson = "[";
    for(let i=0;i<len;i++){
        strJson += createEmployeeData();
        if(i!==len-1)
            strJson += ",";
    }
    strJson += "]";

    client.set("dataEmployee",strJson);

    res.end(JSON.stringify({"result":"ok"}))
})

oradb.connectToOracle();

var server = app.listen(8081,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('server is runnung ',host,port);
})
