var db = require("./models");

var primaryObject = {
  name: String,
  address: String,
  contactnamer: String,
  phoneNumber: [ String ],
  items: []
};


db.Primary.create( primaryObject, function(err, successfulPrimary){
  if (err) { return console.log('ERROR', err); }
    console.log("success! it works!", successfulPrimary);
    process.exit();
  });
