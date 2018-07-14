var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    genus: { type: String, default: "felis" },
    name: { type: String, default: "" },
    isHungry:  { type: Boolean, default: true },
    lastFedDate: {type: Date, default: new Date(-8640000000000000)}
});

module.exports = mongoose.model('Cat', Schema);
