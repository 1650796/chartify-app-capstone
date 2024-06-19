const { Schema, model } = require('mongoose');
const DataSchema = require('./chartdata')

const ChartSchema = new Schema({
    chartName: {
        type: String,
        required: true,
        maxLength: 100,
    },

    chartType: {
        type: Array [
            "PieChart",
            "BarChart",
            "LineChart"
        ],
        required: true,
    },

    chartData: [DataSchema],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model.Chart || model('Chart', ChartSchema)