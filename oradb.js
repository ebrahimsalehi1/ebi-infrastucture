const oracledb = require('oracledb');

function connectToOracle(){
    const connection = 
        oracledb.getConnection({
            user:"hse",
            password:"hse",
            connectString:"172.25.40.114:1522/dev"
        });

        console.log("successfully connect to oracle");
}

function runQuery(strQuery){
    const connection = 
        oracledb.getConnection({
            user:"hse",
            password:"hse",
            connectString:"172.25.40.114:1522/dev"
        });

        console.log("successfully connect to oracle");
}

module.exports = {
    connectToOracle
}
