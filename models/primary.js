var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PrimarySchema = new Schema({
  type: String,
  contents: [String],
  full: Boolean,
  packed: Boolean
});


var Primary = mongoose.model('Primary', PrimarySchema);

module.exports = Primary;
