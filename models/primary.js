var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PrimarySchema = new Schema({
  truckname: String,
  location: String,
  contactname: String,
  phonenumber: Number,
  items: [ String ]
});

var Primary = mongoose.model('Primary', PrimarySchema);

module.exports = Primary;
