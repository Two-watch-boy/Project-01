var db = require("./models");

var primaryObject = {
  type: "Backpack",
  contents: ["laptop ", "charger ", "snacks "],
  full: false,
  packed: false
};

db.Primary.remove({}, function(err, deletedPrimaries){

  db.Primary.create( primaryObject, function(err, successfulPrimary){
    if (err) { return console.log('ERROR', err); }

    console.log("success! Here's the actual DB Entry: ", successfulPrimary);
    process.exit();
  });
  console.log("Everything removed!");
});
