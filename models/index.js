var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/primary-demo");
mongoose.connect("mongodb://localhost/secondary-demo");

var Primary = require('./primary');
var Secondary = require('./secondary');


module.exports.Primary = Primary;
module.exports.Secondary = Secondary;
