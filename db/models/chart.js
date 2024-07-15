const { Schema, model } = require('mongoose');


const ChartSchema = new Schema({
    chartId: String,
    chartName: {
        type: String,
        required: true,
        maxLength: 100,
    },

    chartData: [{
        category: [String],
        amount: [Number]
    }]
});

module.exports = ChartSchema