const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');
const config = require('./config.js');
 
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
        oracledb.getConnection(
            dbConfig,
            async function (err,connection){
                if(err) throw err;
                const result = await connection.execute(strQuery);
                return result;
            }
        );
}

module.exports = {
    connectToOracle,runQuery
}
