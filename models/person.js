const oracledb = require('oracledb');
const database = require('../util/database');

const persons = [];

module.exports = class Person{

    constructor(){

        this.bindDefs = [
            {type: oracledb.NUMBER},              // PERSON_ID
            {type: oracledb.STRING, maxSize: 50}, // NAM_FIRST_PRSON
            {type: oracledb.STRING, maxSize: 50}, // NAM_LAST_PRSON
            {type: oracledb.DATE},                // DAT_BIRTH_PRSON   
            {type: oracledb.STRING, maxSize: 50}, // COD_NAT_PRSON
            {type: oracledb.STRING, maxSize: 50}, // COD_PASSPORT_PRSON
            {type: oracledb.STRING, maxSize: 50}, // COD_ECONOM_PRSON
            {type: oracledb.STRING, maxSize: 50}  // COD_MELI_PRSON
        ];

    }    


    async save(){
        products.push(this);
                
        const sqlText = "INSERT INTO FBE_PSN_PERSONS VALUES(:1,:2,:3,:4,:5,:6,:7,:8)";
        const bindData = [ this.personObj ];
        const options = {
            autoCommit: true,
            bindDefs: this.bindDefs

        };

        //const connection = await oracledb.getConnection(dbconfig);
        //const result = await connection.execute(sqlText,dataBinds,options);

        return database.runQuery(sqlText,bindData,options);

        //return result.rowsAffected;

    }

    async deleteById(id){

    }

    async fetchAll(){
        return products;
    }

    async findById(id){

    }

}
