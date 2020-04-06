
var redis = require('redis');

function connectMakeData(){
    var client = redis.createClient();

    client.on("error",(err)=>{
        console.log("error",err);
    });

    let strJson = "";
    strJson = "{";

    let id=0;
    function createData(){
        return JSON.stringify({id:++id,firstName:'ebrahim',lastName:'salehi',salary:3000});
    }


    function createDataExamp(){
        return JSON.stringify({id:++id,dessert:'ebrahim',calories:'salehi',fat:'fat',carbs:'carbs','protein':'protein'});
    }

    // const len = 999999;
    // for(let i=0;i<len;i++){
    //     strJson += createDataExamp();
    //     if(i!==len-1)
    //         strJson += ",";
    // }
    // strJson += "}";

    // client.set("data2",strJson);

    let res = "";
    
    res = client.get("data3",(err,reply)=>{
        //console.log("result",err,reply);
        res = reply;
        //console.log('inside',reply);
        return reply;
    });

    client.quit();
    console.log('res',res);

    return res;
}

module.exports = {
    connectMakeData
}
