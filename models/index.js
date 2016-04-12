var mongoose = require('mongoose');
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "mongodb://localhost/primary-demo" );

var Bag = require('./bag');
module.exports.Bag = Bag;

var Items = require('./items');
module.exports.Items = Items;
