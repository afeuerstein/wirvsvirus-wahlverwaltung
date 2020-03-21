var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
    name: String,
    description: String, 
    created: { type: Date, default: Date.now },
    results: {
        yes: {type: Number, default: -1},
        no: {type: Number, default: -1},
        abstention: {type: Number, default: -1},
    }
});

module.exports = mongoose.model('vote', Vote);