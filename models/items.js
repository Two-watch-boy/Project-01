var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemsSchema = new Schema({
     item: String,
     packed: String,
     important: String
});

var Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;
