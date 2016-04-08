var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Items = require('./items');
module.exports.Items = Items;

var BagSchema = new Schema({
  type: String,
  contents: [Items.schema],
  full: Boolean,
  packed: Boolean
});


var Bag = mongoose.model('Bag', BagSchema);

module.exports = Bag;
