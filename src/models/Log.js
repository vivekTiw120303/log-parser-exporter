const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    timestamp: {type: String},
    level: {type: String},
    message:{type: String},
    ip: String,
    request: String,
    status: Number,
    size: Number,
}, {timestamps: true});

module.exports = mongoose.model('Log', LogSchema);