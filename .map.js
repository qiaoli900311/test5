var path = require('path');
var alias = require('./app.json').alias;
var addAlias = function (config) {
    Object.keys(alias || {}).map(function (index) {
        config.resolve.alias[index] = path.resolve(__dirname, alias[index]);
    });
};
exports.init = function (config) {
    addAlias(config);
};
