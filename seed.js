var db = require("./models");

var primaryObject = {
  name: "My truck",
  address: "225 Bushie",
  contactnamer: "Billy Bob Jenkins III",
  phoneNumber: [ "Mahabis", "Sambas", "Cons", "Cole Haan" ]
};

db.Primary.create( primaryObject, function(err, successfulPrimary){
  if (err) { return console.log('ERROR', err); }
    console.log("success! it works!", successfulPrimary);
    process.exit();
  });
});
