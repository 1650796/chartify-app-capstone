const { Schema } = require('mongoose');

const ChartSchema = new Schema({
    chartName: {
        type: String,
        required: true,
        maxLength: 100,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = ChartSchema