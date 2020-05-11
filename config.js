var maxRows;      // number of rows to query
var batchSize;    // batch size for fetching rows
var bpmnioXMLFile = './sampledata/diagram.bpmn'
var bpmnOracleXMLFile = './sampledata/diagramora.bpmn'

maxRows = 50000;
batchSize = 1000

sqlFilePath = "./sqlquery/"

exports.maxRows = maxRows;
exports.batchSize = batchSize;
exports.sqlFilePath = sqlFilePath
exports.bpmnioXMLFile = bpmnioXMLFile
exports.bpmnOracleXMLFile = bpmnOracleXMLFile
