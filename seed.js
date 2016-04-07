var db = require("./models");

var primaryObject = [];
primaryObject.push({
  type: "Backpack",
  contents: itemList,
  full: false,
  packed: false
});

var itemList = [];
itemList.push({
  item: 'laptop',
  important: true,
  packed: true
});
itemList.push({
  item: 'laptop charger',
  important: true,
  packed: false
});
itemList.push({
  item: 'toothbrush',
  important: false,
  packed: true
});
itemList.push({
  item: 'snacks',
  important: false,
  packed: false
});




db.Primary.remove({}, function(err, deletedPrimaries){

  db.Primary.create( primaryObject, function(err, successfulPrimary){
    if (err) { return console.log('ERROR', err); }

    console.log("success! Here's the actual DB Entry: ", successfulPrimary);
    process.exit();
  });
  console.log("Everything removed!");
});
