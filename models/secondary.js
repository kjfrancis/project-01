var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SecondarySchema = new Schema({
  item: String,
});

var Primary = mongoose.model('Secondary', SecondarySchema);

module.exports = Secondary;
