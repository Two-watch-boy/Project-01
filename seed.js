var db = require("./models");

var itemList0 = [];
// itemList0.push({
//   item: 'laptop',
//   packed: true,
//   important: true
// });
// itemList0.push({
//   item: 'laptop charger',
//   packed: false,
//   important: true
// });
// itemList0.push({
//   item: 'toothbrush',
//   packed: true,
//   important: false
// });
// itemList0.push({
//   item: 'snacks',
//   packed: false,
//   important: false
// });
//
var itemList1 = [];
// itemList1.push({
//   item: 'taser',
//   packed: true,
//   important: true
// });
// itemList1.push({
//   item: 'wallet',
//   packed: true,
//   important: true
// });
// itemList1.push({
//   item: 'M&Ms',
//   packed: true,
//   important: true
// });



var bagObject = [];
// bagObject.push({
//   type: "Backpack",
//   contents: itemList0,
//   full: false,
//   packed: false
// });
// bagObject.push({
//   type: "purse",
//   contents: itemList1,
//   full: true,
//   packed: true
// });





db.Bag.remove({}, function(err, deletedBagss){

  db.Bag.create( bagObject, function(err, successfulBag){
    if (err) { return console.log('ERROR', err); }

    console.log("success! Here's the actual DB Entry: ", successfulBag);
    process.exit();
  });
  console.log("Everything removed!");
});
