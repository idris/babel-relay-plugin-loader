var fs = require('fs');
var path = require('path');
var getbabelRelayPlugin = require('babel-relay-plugin');
var config = require('../../package.json');

try {
    var schemaPath = path.join(__dirname, '../../', config.metadata.graphql.schema);

    var stats = fs.lstatSync(schemaPath);

    if (stats.isFile()) {
        var schema = require(schemaPath);
    }
}
catch (e) {
    console.log(e);
}

if (schema) {
    module.exports = getbabelRelayPlugin(schema.data);
} else {
    module.exports = getbabelRelayPlugin();
}
