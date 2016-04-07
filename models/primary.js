var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Secondary = require('./secondary');
module.exports.Secondary = Secondary;

var PrimarySchema = new Schema({
  type: String,
  contents: [Secondary.schema],
  full: Boolean,
  packed: Boolean
});


var Primary = mongoose.model('Primary', PrimarySchema);

module.exports = Primary;
