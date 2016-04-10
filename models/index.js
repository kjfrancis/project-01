var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/primary-demo");

var Primary = require('./primary');

module.exports.Primary = Primary;
module.exports.Secondary = require('./Secondary');
