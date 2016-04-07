var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Secondary = new Schema({
     item: String,
     packed: Boolean,
     inportant: Boolean
});

var Secondary = mongoose.model('Secondary', SecondarySchema);

module.exports = Secondary;