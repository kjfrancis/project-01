var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PrimarySchema = new Schema({
  name: String,
  address: String,
  favoriteColor: String,
  shoes: [ String ]
});

var Primary = mongoose.model('Primary', PrimarySchema);

module.exports = Primary;
