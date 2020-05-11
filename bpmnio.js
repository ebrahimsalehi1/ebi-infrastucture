//var fs = require('fs')
//var config = require('./config')

async function readSampleXML(){

    var fs = require('fs')
    var config = require('./config')

    //console.log('bpmnioXMLFile',config.bpmnioXMLFile)
    let data = undefined
    fs.readFileSync(config.bpmnioXMLFile,'utf-8')
        .then(mdata=>data=mdata)
    
    return data
}

exports.readSampleXML = readSampleXML
