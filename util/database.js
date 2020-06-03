const oracledb = require('oracledb');
const dbConfig = require('../dbconfig');
const config = require('../config');
 
function connectToOracle(){
    const connection = 
        oracledb.getConnection({
            user:"hse",
            password:"hse",
            connectString:"172.25.40.114:1522/dev"
        });

        console.log("successfully connect to oracle");
}

function runQuery(sqlText,dataBinds,options){
        oracledb.getConnection(
            dbConfig,
            async function (err,connection){
                if(err) throw err;
                const result = await connection.execute(sqlText,dataBinds,options);
                return result.rowsAffected;
            }
        );
}

module.exports = {
    connectToOracle,runQuery
}
