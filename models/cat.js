var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    genus: { type: String, default: "felis" },
    name: { type: String, default: "" },
    isHungry:  { type: Boolean, default: true },
    lastFedDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Cat', Schema);
