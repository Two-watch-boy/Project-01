var db = require("./models");

var primaryObject = {
  name: "Justin",
  address: "225 Bushie",
  favoriteColor: "Periwinkle",
  shoes: [ "Mahabis", "Sambas", "Cons", "Cole Haan" ]
}

db.Primary.remove({}, function(err, deletedPrimaries){

  db.Primary.create( primaryObject, function(err, successfulPrimary){
    if (err) { return console.log('ERROR', err); }

    console.log("success! HEre's the actual DB Entry: ", successfulPrimary);
    process.exit();
  });
  console.log("Everything removed!");
});
