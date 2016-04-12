var mongoose = require('mongoose');
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "mongodb://heroku_qztn11jb:vlsa6p9am8os6l80dfckv9h8r7@ds023510.mlab.com:23510/heroku_qztn11jb" );

var Bag = require('./bag');
module.exports.Bag = Bag;

var Items = require('./items');
module.exports.Items = Items;
