var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/primary-demo");


var Bag = require('./bag');
module.exports.Bag = Bag;

var Items = require('./items');
module.exports.Items = Items;
