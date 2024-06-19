const { Schema } = require('mongoose');

const DataSchema = new Schema({
    category: [String],
    amount: [Number]
})

module.exports = DataSchema